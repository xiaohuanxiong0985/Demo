<template>
  <div id="app" :class="currentModa">
    <router-view/>
  </div>
</template>
<script>
import resize from '@/views/mixin';
export default {
  //
  mixins: [resize], //  全局混入
  computed: {
    //  监听当前时间,改变模式
    currentModa () {
      return this.$store.state.app.currentModa;
    }
  },
  mounted () {
    console.log(this.currentMode());
  },
  methods: {
    currentMode () {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      } else {
        return 'light';
      }
    }
  }
};
</script>
<style>
</style>
