<template>
  <div>
    <div class="flex">
      <router-link class="item" to="/loading/demo1">loading1</router-link>
      <router-link class="item" to="/loading/demo2">loading2</router-link>
      <router-link class="item" to="/loading/demo3">loading3</router-link>
      <router-link class="item" to="/loading/demo4">loading4</router-link>
      <router-link class="item" to="/loading/demo5">loading5</router-link>
      <router-link class="item" to="/background/demo1">background1</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
  .item {
    flex: 1;
  }
}
</style>