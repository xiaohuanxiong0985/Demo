<template>
  <div class="chrray-main">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号" prop="tel">
        <el-input v-model="form.tel"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="logins">默认按钮</el-button>
      </el-form-item>
    </el-form>
    <el-button @click="user">默认按钮</el-button>
  </div>
</template>

<script>
import { login, user } from 'api/user'
export default {
  data () {
    return {
      form: {
        tel: '15215020796',
        password: '123456'
      }
    };
  },
  methods: {
    logins () {
      login({...this.form})
        .then(res => {
          this.$store.commit('SET_TOKEN', res.data.token)
        })
    },
    user () {
      user()
        .then(res => {
          console.log(res)
        })
    }
  }
};
</script>

<style scoped>

</style>
