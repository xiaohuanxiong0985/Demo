<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">注册</h1>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
          <van-field
            v-model="value"
            type="tel"
            placeholder="请输入手机号码"
            class="chrray-login-input">
          </van-field>
          <van-field
            v-model="sms"
            center
            clearable
            placeholder="请输入验证码"
            class="chrray-login-input">
            <van-button plain color="#999999" slot="button" size="small" type="primary">获取验证码</van-button>
          </van-field>
          <van-field
            v-model="password"
            placeholder="密码长度6-16"
            :type="pass"
            :right-icon="pass === 'password' ? 'closed-eye': 'eye-o'"
            @click-right-icon="icon(pass)"
            class="chrray-login-input">
          </van-field>
          <van-button type="default" block class="mt-27">注册</van-button>
        </van-cell-group>
        <div class="body-agreement">
          <van-checkbox
            ref="checkboxes"
            v-model="checked"
            shape="square"
            icon-size="15px"
            checked-color="#F24E13">
          </van-checkbox>
          <div class="fz12 mg-lef5 he20" slot="default">
            <span class="fz12 mg-lef5" @click="toggle">我已阅读并同意车家邦</span>
            <span class="fz12" style="color: #279AD3">《用户注册协议》</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Checkbox } from 'vant';
export default {
  name: 'registered',
  data () {
    return {
      value: '',
      password: '',
      sms: '',
      checked: true,
      pass: 'password',
      rt_io: 'closed-eye'
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
    //
  },
  methods: {
    toggle () {
      this.$refs.checkboxes.toggle();
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
  @import "index";
</style>
