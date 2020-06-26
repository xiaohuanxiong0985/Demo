<template>
  <div class="main">
    <h1 class="text" data-text="loading">loading</h1>
  </div>
</template>

<script>
export default {
  name: "demo3"
}
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-family: "Poppins", sans-serif;
  background-color: #000;
  .text {
    position: relative;
    font-size: 128px;
    color: #222;
    text-transform: uppercase;
    border-bottom: 16px solid #222;
    letter-spacing: 10px;
    line-height: 130px;
    &:before {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      color: #03a9f4;
      overflow: hidden;
      border-bottom: 16px solid #03a9f4;
      animation: animate 10s linear infinite;
    }
  }
}
@keyframes animate {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>