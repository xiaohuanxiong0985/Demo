<template>
  <div class="main">
    <div class="text">
      <span>动态渐变背景</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo1'
};
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  font-family: 'monospace', sans-serif;
  background-image: linear-gradient(125deg, #1abc9c, #2ecc71, #3498db, #9b59b6, #34495e);
  background-size: 400%;
  animation: animate 15s linear infinite;
  .text {
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
  }
}
@keyframes animate {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style>
