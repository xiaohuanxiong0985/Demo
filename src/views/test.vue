<template>
  <div>
    <button @click="handleClick">点击</button>
    <span>{{ text }}</span>
    <button @click="song">发送邮件</button>
  </div>
</template>

<script>
import { observeSession } from '../utils/util';
export default {
  name: 'test',
  data() {
    return {
      text: ''
    }
  },
  mounted () {
    //
  },
  methods: {
    handleClick() {
      const that = this;
      observeSession.on('success', () => {
        that.text = '点击事件'
      });
      observeSession.emmit('success')
    },
    //  验证
    test1() {
      throw new Error('错误')
    },
    //  输入框
    song() {
      //
    }
  }
};
</script>

<style scoped>

</style>
