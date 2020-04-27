<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <my-form :list="list" ref="form">
          <template slot="footer">
            <el-button type="primary" @click="handelClick1">提交</el-button>
            <el-button type="text" @click='handelClick'>重置</el-button>
          </template>
        </my-form>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import myForm from 'components/form'
export default {
  components: {
    myForm
  },
  data () {
    return {
      list: [
        {
          name: 'name',
          label: '姓名',
          value: '',
          type: 'el-input',
          rule: [
            { required: true, message: 'The  name canot be empty', trigger: 'blur' }
          ]
        },
        {
          name: 'sex',
          label: '性别',
          value: '',
          type: 'el-select',
          children: {
            type: 'el-option',
            list: [
              { value: 1, title: '男' },
              { value: 2, title: '女' }
            ]
          }
        }
      ]
    };
  },
  methods: {
    handelClick1 () {
      this.$refs.form.validate(valid => {
        if (valid) {
          console.log(`可以提交哦`)
        }
      })
    },
    handelClick () {
      this.$refs.form.handleReset()
    }
  }
};
</script>

<style scoped>

</style>