<template>
  <div class="page-main">
    <div class="row">
      <template v-for="(item, index) in loadingList">
        <xhx-button class="item" :url="item.url" :key="index">{{ item.title }}</xhx-button>
      </template>
<!--      <xhx-button class="item" :url="'/loading/demo2'">loading2</xhx-button>-->
<!--      <xhx-button class="item" :url="'/loading/demo3'">loading3</xhx-button>-->
<!--      <xhx-button class="item" :url="'/loading/demo4'">loading4</xhx-button>-->
<!--      <xhx-button class="item" :url="'/loading/demo5'">loading5</xhx-button>-->
    </div>
    <div class="row">
      <template v-for="(item, index) in effectList">
        <xhx-button
          class="item"
          :key="index"
          :type="item.type"
          :color="item.color"
          :url="item.url">
          {{ item.title }}
        </xhx-button>
      </template>
    </div>
  </div>
</template>

<script>
import xhxButton from './button/index';
export default {
  data () {
    return {
      loadingList: [
        { title: '样式一', url: '/loading/demo1' },
        { title: '样式二', url: '/loading/demo2' },
        { title: '样式三', url: '/loading/demo3' },
        { title: '样式四', url: '/loading/demo4' },
        { title: '样式五', url: '/loading/demo5' }
      ],
      effectList: [
        { title: '渐变背景', color: '#feca57', type: 'demo2', url: '/background/demo1' },
        { title: '日环食', color: '#0abde3', type: 'demo2', url: '/background/demo2' },
        { title: '视差滚动', color: '#54a0ff', type: 'demo2', url: '/background/demo4' },
        { title: '哔哩哔哩', color: '#00d2d3', type: 'demo2', url: '/bilibili' },
        { title: '仪表盘', color: '#c8d6e5', type: 'demo2', url: '/dashboard' },
        { title: '购物清单', color: '#e74c3c', type: 'demo2', url: '/cart/demo1' }
      ]
    };
  },
  components: {
    xhxButton
  },
  mounted () {
    // console.log(this)
    // console.log($)
  },
  methods: {
  }
};
</script>
<style scoped lang="scss">
.page-main {
  padding: 15px;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  .row {
    display: grid;
    grid-gap: 20px 0;
    grid-template-columns: repeat(4, 1fr);
    +.row {
      padding-top: 40px;
    }
    .item {
      justify-self: center;
    }
  }
}
</style>
