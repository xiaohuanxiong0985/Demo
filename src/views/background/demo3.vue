<template>
  <div class="body">
    <main class="main">
      <section class="list-item" v-for="item in 8" :key="item">
        <div class="item-image">
          <img :src="'https://picsum.photos/360/520?random='+item" alt="图片">
        </div>
        <div class="item-text">
          <div class="text-title">{{ '这是标题部分大会加大对'+item }}</div>
          <div class="text-desc">{{ '这是副标题的哈就是导航' + item }}</div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style scoped lang="scss">
.body {
  width: 100vw;
  height: 100vh;
  transform-style: preserve-3d;
  overflow-y: auto;
  .main {
    perspective: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .list-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 80vh;
      overflow: hidden;
      &:hover {
        .item-image {
          &:before {
            background-color: rgba(0, 0, 0, .2);
          }
        }
      }
      .item-image {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
        transform: translateZ(-50px) scale(2.4);
        &:before {
          content: "";
          display: block;
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, .4);
          transition: all .3s ease;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .item-text {
        color: #fff;
        font-family: 'Courier New', Courier, monospace;
        text-align: center;
        .text-title {
          font-size: 32px;
          font-weight: bolder;
          margin-bottom: 20px;
        }
        .text-desc {
          font-size: 28px;
        }
      }
    }
  }
}

</style>
