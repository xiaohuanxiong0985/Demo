<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">输入验证码</h1>
        <h3 class="subtitle">短信验证码已发送至 18883124569</h3>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
          <van-field
            v-model="sms"
            center
            clearable
            placeholder="请输入验证码"
            class="chrray-login-input">
            <van-button
              plain
              color="#999999"
              slot="button"
              size="small"
              @click="sendCode"
              :disabled="isPhone"
              type="primary">
              {{ timer }}
            </van-button>
          </van-field>
          <van-button type="default" block class="mt-27" @click="login">登录</van-button>
        </van-cell-group>
        <div class="mt-14">
          <p class="text">没有收到验证码？倒计时结束后可重新获取</p>
        </div>
        <div class="body-agreement">
          <van-checkbox
            ref="checkboxes"
            v-model="checked"
            shape="square"
            icon-size="13px"
            checked-color="#F24E13">
          </van-checkbox>
          <div class="fz12 mg-lef5 he20" slot="default">
            <span class="fz12 mg-lef5 col-999" @click="toggle">我已阅读并同意车家邦</span>
            <span class="fz12 col-279">《用户注册协议》</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Checkbox } from 'vant';
export default {
  name: 'login_code',
  data () {
    return {
      value: '',
      password: '',
      checked: true,
      sms: '',
      //  验证码
      timer: 60,
      isPhone: true,
      codeText: ''
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
  mounted () {
    this.sendCode();
  },
  methods: {
    //  密码可见/不可见
    toggle () {
      this.$refs.checkboxes.toggle();
    },
    //  计时器
    sendCode () {
      let that = this;
      let time = setInterval(() => {
        if (that.timer === 0) {
          clearInterval(time);
        } else {
          that.isPhone = true;
          that.codeText = that.timer + 's';
          that.timer--;
        }
      }, 1000);
    },
    //  登录
    login () {
      //
    }
  }
};
</script>
<style lang="less">
  @import "index";
</style>
