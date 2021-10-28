<template>
  <div class="body">
    <template v-for="(item, index) in 3">
      <section
          class="g-img"
          :key="index"
          :style="{ backgroundImage: `url(https://picsum.photos/2880/1800?random=${index}.webp)` }">
        {{ item }}
      </section>
    </template>

  </div>
</template>

<script>
export default {

};
</script>

<style scoped lang="scss">
section {
  height: 100vh;
}
.g-img {
  background-attachment: fixed; /* 实现视差滚动的主要属性 */
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
