<template>
  <div class="main">
    <div class="grid">
      <div v-for="item in 8" :key="item" class="grid-item" :class="'item'+item" data-text="图片">
        <img :src="'https://picsum.photos/360/520?random='+item" class="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid'
};
</script>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .grid {
    width: 100vw;
    background-color: #95a5a6;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    grid-auto-flow: row;
    justify-content: center;
    padding: 10px;
    &-item {
      text-align: center;
      position: relative;
      overflow: hidden;
      border-radius: 10px;
      transition: all 1s;
      &:before {
        content: attr(data-text);
        position: absolute;
        top: -100px;
        left: 0;
        right: 0;
        bottom: 100%;
        background-color: rgba(0, 0, 0, .5);
        transition: all 1s;
      }
      &:hover:before {
        bottom: 0;
      }
      &.item1 {background-color: #1abc9c;}
      &.item2 {background-color: #2ecc71;}
      &.item3 {background-color: #3498db;}
      &.item4 {background-color: #9b59b6;}
      &.item5 {background-color: #e67e22;}
      .img {
        width: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
}
</style>
