<template>
  <div class="body">
    <div id="countdown">
      <svg :width="size" :height="size">
        <circle
          fill="transparent"
          :stroke-width="stroke"
          stroke="#eee"
          :r="radius"
          :cx="circleOffser"
          :cy="circleOffser"></circle>
        <circle
          class="circle"
          fill="transparent"
          :stroke-width="stroke"
          stroke="#66ccff"
          :r="radius"
          :cx="circleOffser"
          :cy="circleOffser"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="progress"
          stroke-linecap="round"></circle>
      </svg>
      <span>{{ countdown }}</span>
    </div>
    <button @click="animate">点击开始倒计时</button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      size: 120,
      stroke: 10,
      percentage: 100,
      timer: null,
      seconds: 10
    };
  },
  computed: {
    radius () {
      return (this.size / 2) - (this.stroke / 2);
    },
    circleOffser () {
      return this.size / 2;
    },
    //  圆周
    circumference () {
      return this.radius * 2 * Math.PI;
    },
    //  计算进度条  圆周-圆周*百分比/100
    progress () {
      return this.circumference - this.circumference * this.percentage / 100;
    },
    //  倒计时数字  向上取整(总数 * 当前的进度 / 100)
    countdown () {
      return Math.ceil(this.seconds * this.percentage / 100);
    }
  },
  mounted () {
    let a = 10;
    let evn = 'pro';
    // let token = this.$store.state.id;
    //  判断深色模式
    try {
      // eslint-disable-next-line no-throw-literal
      if (a === 10) throw 123;
    } catch (e) {
      if (evn === 'pro') {
        console.log(e);
      } else {
        console.log(111);
      }
    }
  },
  methods: {
    animate () {
      this.timer = setInterval(_ => {
        this.percentage -= 1 / 10;
        if (this.percentage <= 0) {
          clearInterval(this.timer);
          this.percentage = 100;
        }
      }, this.seconds * 1000 / 100 / 10);
    }
  }
};
</script>
<style scoped>
  body {
    min-height: 100vh;
  }
  .circle {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }
  #countdown {
    display: inline-block;
    position: relative;
  }
  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-family: monospace;
    color: #66ccff;
    font-size: 80px;
  }
</style>
