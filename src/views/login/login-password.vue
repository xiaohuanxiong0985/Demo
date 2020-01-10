<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">密码登录</h1>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
          <van-field
            v-model="value"
            placeholder="请输入手机号码"
            class="chrray-login-input">
          </van-field>
          <van-field
            type="password"
            v-model="password"
            placeholder="请输入登录密码"
            class="chrray-login-input">
          </van-field>
          <p class="pass-title" @click="jumpBack">忘记了？找回密码</p>
          <van-button type="default" block class="mt-27">登录</van-button>
        </van-cell-group>
        <div class="body-agreement">
          <van-checkbox
            ref="checkboxes"
            v-model="checked"
            shape="square"
            icon-size="12px"
            checked-color="#F24E13">
          </van-checkbox>
          <div class="fz12 mg-lef5 he20" slot="default">
            <span class="fz12 mg-lef5" @click="toggle">我已阅读并同意车家邦</span>
            <span class="fz12" style="color: #279AD3">《用户注册协议》</span>
          </div>
        </div>
      </div>
      <div class="form-wx">
        <van-divider :style="{ borderColor: '#eee' }">第三方登录</van-divider>
        <div style="padding:17px 0 37px 0">
          <van-icon name="chat-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Checkbox } from 'vant';
export default {
  name: 'login-password',
  data () {
    return {
      value: '',
      password: '',
      checked: true,
      sms: ''
    };
  },
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox
  },
  methods: {
    toggle () {
      this.$refs.checkboxes.toggle();
    },
    //  登录
    login () {
      //
    },
    //  找回密码
    jumpBack () {
      this.$router.push({
        path: '/forget_password'
      });
    }
  }
};
</script>
<style lang="less">
  @import "index";
  .pass-title {
    font-size: 24px;
    color: #333333;
    text-align: right;
    margin-top: 20px;
  }
</style>
<style scoped lang="less">
  .he20 {
    height: 40px;
  }
</style>
