<template>
  <div class="chrray-login">
    <div class="login-form">
      <div class="form-title">
        <h1 class="title">完善信息</h1>
      </div>
      <div class="form-body">
        <van-cell-group :border="false">
          <van-field
            value="输入框已禁用"
            label="用户名"
            input-align="right"
            label-width="auto"
            right-icon="contact"
            disabled
            class="cell-pd"
          />
          <van-cell is-link value="重庆市渝北区" class="cell-pd">
            <div class="text-lef" slot="title">
              所在区域<span style="color: #F43A3A">*</span>
            </div>
          </van-cell>
          <van-cell is-link value="请选择所在小区" class="cell-pd">
            <div class="text-lef" slot="title">
              所在小区<span style="color: #F43A3A">*</span>
            </div>
          </van-cell>
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
          <van-button type="default" block class="mt-27" @click="registered">注册</van-button>
        </van-cell-group>
        <div class="body-agreement">
          <van-checkbox
            v-model="checked"
            shape="square"
            icon-size="15px"
            checked-color="#F24E13">
          </van-checkbox>
          <p class="fz12" style="margin-left: 5px">我已阅读并同意车家邦<span style="color: #279AD3">《用户注册协议》</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CellGroup, Field, Button, Divider, Icon, Checkbox, Cell } from 'vant';
export default {
  name: 'information',
  data () {
    return {
      value: '',
      password: '',
      sms: '',
      checked: false,
      passwordShow: false,
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
    [Checkbox.name]: Checkbox,
    [Cell.name]: Cell
  },
  mounted () {
    //
  },
  methods: {
    toggle () {
      this.$refs.checkboxes.toggle();
    }
  }
};
</script>

<style scoped>

</style>
