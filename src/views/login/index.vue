<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">您好,</h1>
        <h1 class="title">欢迎来到车家邦</h1>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
<!--          <van-field v-model="value" placeholder="请输入电话号码"></van-field>-->
          <selectValue
            :dataList="fromList"
            :formData="formData"
            :columns="columns"
            @event="eventChange"
            @jump="onEvent"></selectValue>
          <van-button type="default" block class="mt-27" @click="jumpCode">获取验证码</van-button>
        </van-cell-group>
        <div class="mt-27 d-flex flex-justify-between">
          <p class="text" @click="jumpPassword">密码登录</p>
          <p class="text" @click="jumpRegistered">注册账号</p>
        </div>
      </div>
      <div class="form-wx" v-show="isOriginHei">
        <van-divider :style="{ borderColor: '#eee' }">第三方登录</van-divider>
        <div style="padding:17px 0 37px 0">
          <van-icon name="chat-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Cell, Toast } from 'vant';
import selectValue from '@/components/field';
export default {
  data () {
    return {
      columns: [
        { prop: '111', text: '1111', show: false },
        { prop: 'address', text: '2222', show: false }
      ],
      formData: {
        phone: '',
        address: '',
        password: '',
        yzm: ''
      },
      fromList: [
        { label: '电话号码', prop: 'phone', max: 11, type: 'number' },
        { label: '地址', prop: 'address', link: true, readonly: true },
        { label: '验证码', prop: 'yzm', max: 6, type: 'number', slot: true, btnText: '获取验证码' },
        { label: '密码', prop: 'password', max: 16, type: 'password', icon: 'closed-eye' }
      ],
      //  电话
      value: '',
      passwordShow: false,
      pass: 'password',
      rt_io: 'closed-eye',
      isOriginHei: true,
      documentHeight: document.documentElement.clientHeight
    };
  },
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [Toast.name]: Toast,
    selectValue
  },
  mounted () {
    // window.onresize监听页面高度的变化
    window.onresize = () => {
      return (() => {
        if (this.documentHeight > document.documentElement.clientHeight) {
          this.isOriginHei = false;
        } else {
          this.isOriginHei = true;
        }
      })();
    };
  },
  methods: {
    toggle () {
      this.$refs.checkboxes.toggle();
    },
    //  获取验证码
    jumpCode () {
      let that = this;
      if (that.value !== '') {
        this.$router.push({
          path: '/login_code'
        });
      } else if (that.value === '') {
        Toast('手机号不能为空！');
      }
      // else if (!(/^1[3456789]\d{9}$/.test(that.value))) {
      //   this.$router.push({
      //     path: '/login_code'
      //   });
      // }
    },
    //  密码登录
    jumpPassword () {
      this.$router.push({
        path: '/login_password'
      });
    },
    //  注册
    jumpRegistered () {
      this.$router.push({
        path: '/registered'
      });
    },
    //  输入框
    eventChange (type, val) {
      this.formData[type] = val;
    },
    //  点击框
    onEvent (val) {
      console.log(val);
      let a = this.columns;
      a.map((item) => {
        if (val.prop === item.prop) {
          console.log(val.prop);
          console.log(item.prop);
        }
      });
    },
    //  图标切换
    icon (pass) {
      if (pass === 'password') {
        this.pass = 'tel';
      } else if (pass === 'tel') {
        this.pass = 'password';
      }
    }
  }
};
</script>
<style lang="less">
.chrray-login-input {
  padding: 30px 0;
  color: #000;
  &:after {
    position: absolute;
    box-sizing: border-box;
    content: ' ';
    pointer-events: none;
    right: 0;
    bottom: 0;
    left: 0 !important;
    border-bottom: 0.02667rem solid #eee;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
    top: 86px;
  }
}
.cell-pd {
  padding: 15px 0;
}
.pass-title {
  font-size: 12px;
  color: #333333;
  text-align: right;
  margin-top: 10px;
}
</style>
<style scoped lang="less">
.chrray-login {
  min-height: 100vh;
  padding: 0 70px 0 72px;
  .login-form {
    padding-top: 140px;
    .form-title {
      margin-bottom: 60px;
      .title {
        font-size: 44px;
        font-weight: bold;
        text-align: left;
        color: #333;
      }
    }
    .form-body {
      .text {
        font-size: 30px;
        color: #666;
      }
      .registered-title {
        margin-top: 10px;
        font-size: 15px;
        color: #666;
        font-weight: 500;
      }
      .body-agreement {
        margin-top: 12px !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .form-wx {
      position: fixed;
      bottom: 0;
      width: 100%;
      left: 0;
      box-sizing: border-box;
      padding: 0 35px 0 36px;
      .title {
        font-size: 12px;
        color: #666666;
        position: relative;
        &:after {
          position: absolute;
          content: '';
          width: 228px;
          height: 1px;
          transform: scale(.5);
          background-color: red;
          bottom: 8px;
          left: -68px;
        }
        &:before {
          position: absolute;
          content: '';
          width: 228px;
          height: 1px;
          transform: scale(.5);
          background-color: red;
          bottom: 8px;
          right: -68px;
        }
      }
    }
  }
}
</style>
