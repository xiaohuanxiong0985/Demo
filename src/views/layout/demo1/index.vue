<template>
  <div class="main" >
  <!--  <div>{{ '当前屏幕大小:' + device }}</div>-->
    <div class="footer">{{ '当前时间:' + currentTime }}</div>
  </div>
</template>

<script>
import resize from '@/views/mixin';
export default {
  name: 'index',
  mixins: [resize],
  computed: {
    // device() {
    //   return this.$store.state.app.device
    // },
    currentTime() {
      return this.$store.state.app.currentDate
    },
    // currentModa() {
    //   return this.$store.state.app.currentModa
    // }
  }
};
</script>

<style scoped lang="scss">
.main {
  position: relative;
  width: 100vw;
  height: 100vh;
  .footer {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
  }
}
</style>
