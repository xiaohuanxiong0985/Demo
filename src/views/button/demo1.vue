<template>
  <router-link :to="url" class="button">
    <slot>霓虹灯按钮</slot>
  </router-link>
</template>

<script>
export default {
  name: "index",
  props: {
    url: {
      type: String,
      default: '/'
    },
  }
}
</script>

<style scoped lang="scss">
.button {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-family: sans-serif;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 2000px;
  z-index: 1;
  &:hover {
    animation: animate 8s linear infinite;
  }
  &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    bottom: -5px;
    right: -5px;
    z-index: -1;
    background-size: 400%;
    background-image: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    border-radius: 2000px;
    opacity: 0;
    transition: .5s;
  }
  &:hover:before {
    filter: blur(20px);
    opacity: 1;
    animation: animate 8s linear infinite;
  }
}
@keyframes animate {
  0% {
    background-position: 0;
  }
  100% {
    background-position: 400%;
  }
}
</style>