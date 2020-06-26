<template>
  <div class="main">
    <div class="loading">
      <span class="text">loading..</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo2"
}
</script>

<style scoped lang="scss">
.main {
  background-color: #34495e;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "monospace", sans-serif;
  .loading {
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 10px solid #e74c3c;
    position: relative;
    animation: animate 2s linear infinite;
    &:before,
    &:after {
      content: "";
      width: 200px;
      height: 200px;
      position: absolute;
      left: 0;
      top: -10px;
      box-sizing: border-box;
      border-radius: 50%;
    }
    &:before {
      border-top: 10px solid #e67e22;
      transform: rotate(120deg);
    }
    &:after {
      border-top: 10px solid #3498db;
      transform: rotate(2400deg);
    }
    .text {
      position: absolute;
      width: 200px;
      height: 200px;
      color: #fff;
      text-align: center;
      line-height: 200px;
      animation: textAninate 2s linear infinite;
    }
  }
}
@keyframes animate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes textAninate {
  to {
    transform: rotate(-360deg);
  }
}
</style>