<template>
  <div class="page-main">
    <div class="row">
      <xhx-button class="item" :type="'demo1'" :url="'/loading/demo1'">loading1</xhx-button>
      <xhx-button class="item" :type="'demo1'" :url="'/loading/demo2'">loading2</xhx-button>
      <xhx-button class="item" :type="'demo1'" :url="'/loading/demo3'">loading3</xhx-button>
      <xhx-button class="item" :type="'demo1'" :url="'/loading/demo4'">loading4</xhx-button>
      <xhx-button class="item" :type="'demo1'" :url="'/loading/demo5'">loading5</xhx-button>
    </div>
    <div class="row">
      <xhx-button
        class="item"
        type="demo2"
        title="渐变背景"
        url="/background/demo1" />
      <xhx-button
        class="item"
        type="demo2"
        title="日环食"
        colorType="orange"
        url="/background/demo2" />
      <xhx-button
        class="item"
        type="demo2"
        title="视差滚动"
        colorType="green"
        url="/background/demo3" />
      <xhx-button
        class="item"
        type="demo2"
        title="哔哩哔哩"
        colorType="red"
        url="/bilibili" />
    </div>
    <button @click="handleClick">点击</button>
  </div>
</template>

<script>
import xhxButton from './button/index'
export default {
  components: {
    xhxButton
  },
  mounted() {
    console.log(this)
    console.log($)
  },
  methods: {
    handleClick() {
      console.log(window.jq)
    }
  }
}
</script>
<style scoped lang="scss">
.page-main {
  padding: 15px;
  min-width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  .row {
    display: grid;
    grid-gap: 20px 0;
    grid-template-columns: repeat(4, 1fr);
    +.row {
      padding-top: 40px;
    }
    .item {
      justify-self: center;
    }
  }
}
</style>
