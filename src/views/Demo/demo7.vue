<template>
  <div class="main">
    <div class="box">
      <img :src="imageBg" width="100%" alt="">
      <div class="bg" :style="process"></div>
      <!--<img :src="imagebg1" class="bg" alt="">-->
      <img :src="imageBg2" class="poi" :style="process" :class="active ? 'pos' : ''">
    </div>
    <div class="step">
      <el-slider v-model="value1"></el-slider>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      active: false,
      process: 'animation-delay: -4.99s;',
      imageBg: require('../../assets/img/img1.png'),
      imagebg1: require('../../assets/img/img2.png'),
      imageBg2: require('../../assets/img/img3.png')
    };
  },
  mounted () {
    this.handleClick();
  },
  methods: {
    handleClick () {
      const range = {
        value: this.value1,
        min: 0,
        max: 100
      };
      const percent = ((range.value - range.min) / (range.max - range.min)) * 5;
      const percentshow = Math.round(((range.value - range.min) / (range.max - range.min)) * 100);
      console.log(percent);
      if (percent < 5) {
        this.process = `animation-delay: -${percent}s;`;
      } else {
        this.process = `animation-delay: 5s;`;
      }
      // this.active = !this.active;
    }
  },
  watch: {
    value1 (val) {
      this.handleClick();
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .box {
    width: 385px;
    position: relative;
    .bg {
      width: 337px;
      height: 337px;
      background-image: url("../../assets/img/img2.png");
      background-size: contain;
      /*background-color: yellow;*/
      background-repeat: no-repeat;
      background-clip: padding-box;
      clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 100% 0%, 100% 100%, 100% 71%, 168px 168px);
      position: absolute;
      top: 9px;
      left: 24px;
      animation-name: loading;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
      animation-play-state: paused;
      animation-direction: reverse;
      animation-delay: 5s;
    }
    .poi {
      position: absolute;
      top: 30px;
      left: 178px;
      transform: rotate(111deg);
      transform-origin: 15px 150px;
      height: 186px;
      animation-name: meter;
      animation-duration: 5s;
      animation-iteration-count: infinite;
      animation-timing-function: cubic-bezier(0, 0.1, 0.9, 0.81);
      animation-play-state: paused;
      animation-direction: reverse;
      animation-delay: 5s;
      &.pos {
        transform: rotate(111deg);
      }
    }
  }
  .step {
    width: 200px;
    display: block;

  }
}
@keyframes loading {
  0% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 100% 0%, 100% 50%, 100% 71%, 168px 168px);
  }
  12.5% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 100% 0%, 100% 0%, 100% 45%, 168px 168px);
  }
  25% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 100% 0%, 100% 0%, 100% 18%, 168px 168px);
  }
  37.5% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 50% 0%, 50% 0%, 78% 0%, 168px 168px);
  }
  50% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 50% 0%, 50% 0%, 50% 0%, 51% 0%, 168px 168px);
  }
  62.5% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 25% 0%, 168px 168px);
  }
  75% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 15%, 168px 168px);
  }
  87.5% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 44%, 168px 168px);
  }
  100% {
    clip-path: polygon(50% 50%, 0% 77%, 0% 50%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 70%, 168px 168px);
  }
}
@keyframes meter {
  0% {
    transform: rotate(111deg);
  }
  12.5% {
    transform: rotate(83deg);
  }
  25% {
    transform: rotate(55deg);
  }
  37.5% {
    transform: rotate(28deg);
  }
  50% {
    transform: rotate(0deg);
  }
  62.5% {
    transform: rotate(-28deg);
  }
  75% {
    transform: rotate(-55deg);
  }
  87.5%{
    transform: rotate(-83deg);
  }
  100% {
    transform: rotate(-111deg);
  }
}
</style>
