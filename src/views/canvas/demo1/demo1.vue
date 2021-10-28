<template>
  <div class="main">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { demo1 } from './demo1';
export default {
  name: 'demo1',
  data () {
    return {
      Width: '',
      Height: ''
    };
  },
  mounted () {
    demo1();
  }
};
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  #canvas {
    /*background-color: #000;*/
    display: block;
  }
}

</style>
