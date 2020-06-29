<template>
  <router-link :to="url" class="button">
    <slot>霓虹灯按钮</slot>
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
    <span class="line line4"></span>
  </router-link>
</template>

<script>
export default {
  name: "demo2",
  props: {
    url: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  color: #03e9f4;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .5s;
  letter-spacing: 4px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  &:hover {
    background-color: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 200px #03e9f4;
  }
  .line {
    position: absolute;
    display: block;
    &.line1 {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(90deg, transparent, #03e94f);
      animation: animate1 1s linear infinite;
    }
    &.line2 {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background-image: linear-gradient(180deg, transparent, #03e94f);
      animation: animate2 1s .25s infinite;
    }
    &.line3 {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(270deg, transparent, #03e94f);
      animation: animate3 1s .5s infinite;
    }
    &.line4 {
      bottom: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-image: linear-gradient(360deg, transparent, #03e94f);
      animation: animate4 1s .75s infinite;
    }
  }
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}
</style>