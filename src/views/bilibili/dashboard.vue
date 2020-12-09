<template>
  <div class="container">
    <canvas id="canvas" width="292" height="292" style="width: 292px;height: 292px"></canvas>
  </div>
</template>

<script>
  import Gauge from './class/dashboard';
  export default {
    name: "bilibili-dashboard",
    mounted() {
      this.$nextTick(() => {
        const my_canvas = document.getElementById('canvas');
        let canvas = my_canvas.getContext('2d');
        const ratio = this.getPixelRatio(canvas);
        my_canvas.style.width = my_canvas.width + 'px';
        my_canvas.style.height = my_canvas.height + 'px';
        my_canvas.width = my_canvas.width * ratio;
        my_canvas.height = my_canvas.height * ratio;
        const gauge = new Gauge({
          'canvas': my_canvas
        })
        gauge.start();
        gauge.watchs();
        setTimeout(() => {
          // let arr = [80, 81, 80, 50, 83, 24, 83, 32, 85, 86];
          let arr = [40, 20, 50, 10, 80, 81, 83, 80, 80, 81]
          arr.forEach((v, i) => {
            setTimeout(() => {
              gauge.update(v)
            }, 2000 * i);
          })
        }, 2000)
      })
    },
    methods: {
      getPixelRatio(context) {
        const backingStore = context.backingStorePixelRatio ||
          context.webkitBackingStorePixelRatio ||
          context.mozBackingStorePixelRatio ||
          context.msBackingStorePixelRatio ||
          context.oBackingStorePixelRatio ||
          context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
      }
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
  background-color: #151515;
  /*background-color: #fff;*/
  canvas {
    /*background-color: red;*/
  }
}

</style>