<template>
  <div class="flex__center">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'index' //  路由
};
</script>

<style scoped lang="scss">
.flex__center {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
