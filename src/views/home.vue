<template>
  <div class="page-main">
    <div class="flex">
      <xhx-button class="item" :url="'/loading/demo1'">loading1</xhx-button>
      <xhx-button class="item" :url="'/loading/demo2'">loading2</xhx-button>
      <xhx-button class="item" :url="'/loading/demo3'">loading3</xhx-button>
      <xhx-button class="item" :url="'/loading/demo4'">loading4</xhx-button>
      <xhx-button class="item" :url="'/loading/demo5'">loading5</xhx-button>
      <xhx-button class="item" :url="'/background/demo1'">background1</xhx-button>
    </div>
  </div>
</template>

<script>
import xhxButton from './button/demo1'
export default {
  components: {
    xhxButton
  }
}
</script>
<style scoped lang="scss">
.page-main {
  padding: 15px;
  min-width: 100vw;
  min-height: 100vh;
  background-color: #000;
  box-sizing: border-box;
  .flex {
    display: grid;
    grid-gap: 20px 0;
    grid-template-columns: repeat(auto-fill, 25%);
    .item {
      justify-self: center;
    }
  }
}
</style>