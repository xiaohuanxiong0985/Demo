<template>
  <div class="container">
    <div class="box">
      <div class="img">
        <img src="@/assets/img/fingerprint.png" />
      </div>
      <p>内容</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "mimicry"
  }
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .box {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100px;
    height: 140px;
    margin: 20px;
    .img {
      width: 100px;
      height: 100px;
      box-shadow: 18px 18px 30px rgba(0, 0, 0, .1), -18px -18px 30px rgba(255, 255, 255, 1);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #efeeee;
      transition: box-shadow .2s ease-out;
      position: relative;
      &:hover {
        box-shadow: 0 0 0 rgba(0, 0, 0, .1),
        0 0 0 rgba(255, 255, 255, 1),
        inset 18px 18px 30px rgba(0, 0, 0, .1),
        inset -18px -18px 30px rgba(255, 255, 255, 1);
        transition: box-shadow .2s ease-out;
        img {
          transition: all 1s ease-out;
          color: #66ccff;
          opacity: 1;
        }
      }
      img {
        width: 60px;
        opacity: .5;
        color: #000;
        transition: all 1s ease-out;
      }
    }
    p {
      color: slategray;
    }
  }
}
</style>