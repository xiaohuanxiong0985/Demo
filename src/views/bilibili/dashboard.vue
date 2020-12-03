<template>
  <div class="container">
    <canvas id="canvas" width="584" height="584" style="width: 292px;height: 292px"></canvas>
  </div>
</template>

<script>
  import Gauge from './class/dashboard';
  export default {
    name: "bilibili-dashboard",
    mounted() {
      this.$nextTick(() => {
        const my_canvas = document.getElementById('canvas');
        const gauge = new Gauge({
          'canvas': my_canvas
        })
        gauge.start();
        // setTimeout(() => {
        //   let arr = [80, 81, 80, 82, 83, 84, 83, 84, 85, 86];
        //   arr.forEach((v, i) => {
        //     setTimeout(() => {
        //       gauge.update(v)
        //     }, 1000 * i);
        //   })
        // }, 2000)
      })
    },
    methods: {

    }
  }
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #151515;*/
  background-color: #fff;
}

</style>