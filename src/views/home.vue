<template>
  <div class="content">
<!--    <ul>-->
<!--      <li v-for="(item, index) in 4" :key="index" class="title">{{ item }}</li>-->
<!--    </ul>-->
    <button class="btn" @click="play">开始游戏</button>
    <div class="map" id="map"></div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
      <el-form-item label="测试名称" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="tree">
        <el-select ref="select" v-model="form.tree" clearable @clear="clearHandle">
          <el-option :value="valueId" :label="valueTitle">
            <el-tree
              id="tree-option"
              ref="selectTree"
              :data="data"
              :props="defaultProps"
              node-key="id"
              :default-expanded-keys="[1,2]"
              @node-click="handleNodeClick">
            </el-tree>
          </el-option>
        </el-select>
        <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
      </el-form-item>
    </el-form>
    <router-link to="/">跳转</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      size: 120,
      stroke: 10,
      percentage: 100,
      timer: null,
      seconds: 10,
      text: '未知模式',
      snake: null,
      data: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1'
          }, {
            id: 5,
            label: '三级 3-1-2',
          }]
        }, {
          id: 2,
          label: '二级 2-2',
          children: [{
            id: 6,
            label: '三级 3-2-1'
          }, {
            id: 7,
            label: '三级 3-2-2',
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      form: {
        tree: ''
      },
      valueTitle: '',
      valueId: '',
      rules: {
        name: [
          { required: true, trigger: 'blur' }
        ],
        tree: [
          { required: true, trigger: 'change' }
        ],
      }
    };
  },
  computed: {
    //
  },
  mounted () {
    // userId(1).then(res => {
    //   console.log(res);
    // })
    let that = this;
    //  用于判断深色模式和浅色模式
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.text = '深色模式';
    } else {
      this.text = '浅色模式';
    }
    //  监听模式
    window.matchMedia('(prefers-color-scheme: dark)').addListener(mediaQueryList => {
      mediaQueryList.matches ? this.text = '深色模式' : this.text = '浅色模式';
    });
    let map = document.getElementById('map')
    this.snake = new this.Snake(map);
    this.snake.display();
    //  监听键盘事件
    document.onkeydown = function (e) {
      let ev = e || window.event;
      let key = ev.keyCode;
      // clearInterval(timer);
      // timer = setInterval(, 500);
      console.log(that.snake.direction)
      switch (key) {
        case 38:
          //  38为方向上键,当向下移动的时候不能向上走
          if (that.snake.direction !== 'down') {
            that.snake.direction = 'up';
            console.log(`up`)
          }
          break;
        case 40:
          if (that.snake.direction !== 'up') {
            that.snake.direction = 'down';
            console.log(`down`)

          }
          break;
        case 37:
          if (that.snake.direction !== 'right') {
            that.snake.direction = 'left';
            console.log(`left`)

          }
          break;
        case 39:
          if (that.snake.direction !== 'left') {
            that.snake.direction = 'right';
            console.log(`right`)

          }
          break;
      }
    };
  },
  methods: {
    handleNodeClick(node) {
      this.valueTitle = node.label;
      this.valueId = node.id;
      this.form.tree = node.id;
      this.$refs.select.blur();
    },
    clearHandle(){
      this.valueTitle = ''
      this.valueId = null
      this.clearSelected()
    },
    /* 清空选中样式 */
    clearSelected(){
      let allNode = document.querySelectorAll('#tree-option .el-tree-node');
      console.log(allNode)
      allNode.forEach((element)=>element.classList.remove('is-current'))
    },
    handleChange () {
      console.log(`change`)
    },
    handleBlur () {
      console.log(1111)
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    //  创建构造方式-蛇属性
    Snake (map) {
      this.width = 10;
      this.height = 10;
      this.direction = 'right';
      //  设置蛇的状态
      this.body = [
        { x: 2, y: 0 }, //  蛇头,第一个点;
        { x: 1, y: 0 }, //  蛇身体,第二个点;
        { x: 0, y: 0 } //  蛇尾巴,最后一个点
      ];
      //  显示蛇
      this.display = function () {
        for (let i = 0; i < this.body.length; i++) {
          if (this.body[i].x !== null) {
            let s = document.createElement('div');
            this.body[i].flag = s;
            s.style.width = this.width + 'px';
            s.style.height = this.height + 'px';
            s.style.backgroundColor = '#000';
            //  位置
            s.style.position = 'absolute';
            s.style.left = this.body[i].x * this.width + 'px';
            s.style.top = this.body[i].y * this.height + 'px';
            map.append(s);
          }
        }
      };
      //  移动处理
      this.run = function () {
        for (let i = this.body.length - 1; i > 0; i--) {
          this.body[i].x = this.body[i - 1].x;
          this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
          case 'left':
            this.body[0].x -= 1;
            break;
          case 'right':
            this.body[0].x += 1;
            break;
          case 'up':
            this.body[0].y -= 1;
            break;
          case 'down':
            this.body[0].y += 1;
            break;
        }
        //  更新蛇所在的位置
        for (let i = 0; i < this.body.length; i++) {
          if (this.body[i].flag !== null) {
            map.removeChild(this.body[i].flag);
          }
        }
        this.display();
      };
    },
    //  按钮事件
    //  开始
    play () {
      clearInterval(this.timer);
      //  页面加载成功后自动执行动画
      this.timer = setInterval(_ => {
        this.snake.run();
      }, 100);
    }
  }
};
</script>
<style scoped>
.map {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: yellow;
}

.el-scrollbar .el-scrollbar__view .el-select-dropdown__item{
  height: auto;
  max-height: 274px;
  padding: 0;
  overflow: hidden;
  overflow-y: auto;
}
.el-select-dropdown__item.selected{
  font-weight: normal;
}
ul li >>>.el-tree .el-tree-node__content{
  height:auto;
  padding: 0 20px;
}
.el-tree-node__label{
  font-weight: normal;
}
.el-tree >>>.is-current .el-tree-node__label{
  color: #409EFF;
  font-weight: 700;
}
.el-tree >>>.is-current .el-tree-node__children .el-tree-node__label{
  color:#606266;
  font-weight: normal;
}
</style>
