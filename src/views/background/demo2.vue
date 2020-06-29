<template>
  <div class="main">
    <div class="eclipse sun"></div>
    <div class="eclipse moon"></div>
  </div>
</template>

<script>
export default {
  name: "demo2"
}
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: skyblue;
  justify-content: center;
  align-items: center;
  animation: bgChange 5s linear infinite;
  .eclipse {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    margin: auto;
  }
  .sun {
    animation: shadow 5s linear infinite;
    background-color: #fff;
  }
  .moon {
    animation: eclipse 5s linear infinite;
  }
}
@keyframes bgChange {
  0%, 100% {
    background-color: skyblue;
  }
  45%, 60% {
    background-color: #282c34;
  }
}
@keyframes shadow {
  50% {
    box-shadow: 0 0 10px 5px #fff;
  }
}
@keyframes eclipse {
  0% {
    left: 300px;
    background-color: skyblue;
  }
  45%, 60% {
    left: 0;
    background-color: #282c34;
  }
  100% {
    left: -300px;
    background-color: skyblue;
  }
}
</style>