<template>
  <div>
    <div class="flex">
      <p>链接</p>
      <video src="https://media.w3.org/2010/05/sintel/trailer.mp4" controls width="500"></video>
    </div>
    <div class="flex">
      <p>本地</p>
      <video src="@/assets/video/video.mp4" controls width="500"></video>
    </div>
  </div>
</template>

<script>
export default {
  //
};
</script>

<style scoped lang="scss">
.flex {
  display: flex;
  flex-direction: column;
}
</style>
