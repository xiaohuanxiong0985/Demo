<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">忘记密码</h1>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
          <van-field
            v-model="value"
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
          <van-button type="default" block class="mt-27" @click="changePassword">修改密码</van-button>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Checkbox, Cell } from 'vant';
export default {
  name: 'forget_password',
  data () {
    return {
      value: '',
      password: '',
      sms: '',
      checked: false
    };
  },
  components: {
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Icon.name]: Icon,
    [Checkbox.name]: Checkbox,
    [Cell.name]: Cell
  },
  mounted () {
    //
  },
  methods: {
    //  修改密码
    changePassword () {
      //
    }
  }
};
</script>

<style scoped>

</style>
