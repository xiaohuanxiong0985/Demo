<template>
  <div class="main">
    <div class="loading"></div>
  </div>
</template>

<script>
  export default {
    name: "loading"
  }
</script>

<style scoped lang="scss">
  .main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: linear-gradient(45deg, transparent,transparent 40%, #e5f405);
      animation: animate 2s linear infinite;
      &:before {
        content: '';
        position: absolute;
        top: 3px;
        left: 3px;
        right: 3px;
        bottom: 3px;
        background: #000;
        border-radius: 50%;
        z-index: 1000;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent,transparent 40%, #e5f405);
        border-radius: 50%;
        z-index: 1;
        filter: blur(30px);
      }
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
