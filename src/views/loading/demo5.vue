<template>
  <div class="main">
    <div class="loading"></div>
    <span class="text">loading.</span>
  </div>
</template>

<script>
export default {
  name: "demo5"
}
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  position: relative;
  .loading {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: linear-gradient(0deg,
      rgb(47, 102, 255),
      rgb(153, 64, 255) 30%,
      rgb(238, 55, 255) 60%,
      rgb(255, 0, 76) 100%);
    animation: animate 1s linear infinite;
    &:before {
      content: "";
      position: absolute;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-image: linear-gradient(0deg,
        rgb(47, 102, 255),
        rgb(153, 64, 255) 30%,
        rgb(238, 55, 255) 60%,
        rgb(255, 0, 76) 100%);
      filter: blur(35px);
    }
    &:after {
      content: "";
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #000;
    }
  }
  .text {
    position: absolute;
    color: #fff;
  }
}
@keyframes animate {
  to {
    transform: rotate(360deg);
  }
}
</style>