<template>
  <div class="main">
    <ul class="loading">
      <li
        v-for="item in 9"
        :key="item"
        :class="'point-' + item "
        class="point"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo4"
}
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .loading {
    height: 200px;
    display: flex;
    .point {
      width: 20px;
      height: 20px;
      border-radius: 10px;
      margin-right: 20px;
      &.point-1 {background-color: red; animation: animate1 4s 0s infinite}
      &.point-2 {background-color: darkturquoise; animation: animate2 4s .2s infinite}
      &.point-3 {background-color: darksalmon; animation: animate3 4s .4s infinite}
      &.point-4 {background-color: deeppink; animation: animate4 4s .6s infinite}
      &.point-5 {background-color: yellow; animation: animate5 4s .8s infinite}
      &.point-6 {background-color: deeppink; animation: animate4 4s 1s infinite}
      &.point-7 {background-color: darksalmon; animation: animate3 4s 1.2s infinite}
      &.point-8 {background-color: darkturquoise; animation: animate2 4s 1.4s infinite}
      &.point-9 {background-color: red; animation: animate1 4s 1.6s infinite}
    }
  }
}
@keyframes animate1 {
  30%, 50% {
    height: 60px;
    transform: translateY(-30px);
  }
  70%, 100% {
    height: 0;
    transform: translateY(0);
  }
}
@keyframes animate2 {
  30%, 50% {
    height: 125px;
    transform: translateY(-60px);
  }
  70%, 100% {
    height: 0;
    transform: translateY(0);
  }
}
@keyframes animate3 {
  30%, 50% {
    height: 160px;
    transform: translateY(-75px);
  }
  70%, 100% {
    height: 0;
    transform: translateY(0);
  }
}
@keyframes animate4 {
  30%, 50% {
    height: 180px;
    transform: translateY(-60px);
  }
  70%, 100% {
    height: 0;
    transform: translateY(0);
  }
}
@keyframes animate5 {
  30%, 50% {
    height: 200px;
    transform: translateY(-45px);
  }
  70%, 100% {
    height: 0;
    transform: translateY(0);
  }
}
</style>