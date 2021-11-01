<template>
  <div class="img" :style="{ 'backgroundColor': color }">
    <img src="https://picsum.photos/200/200?random=1.webp" alt="" ref="img" class="cover">
  </div>
</template>

<script>
export default {
  name: 'CanvasDemo2',
  data () {
    return {
      color: ''
    };
  },
  mounted () {
    this.getImgColor();
  },
  methods: {
    //  获取图片主要颜色
    getImgColor () {
      const that = this;
      const colorThief = new ColorThief();
      let image = this.$refs.img;
      image.crossOrigin = 'Anonymous'; //  设置图片可以跨域访问
      if (image.complete) {
        console.log(colorThief.getColor(image));
      } else {
        image.addEventListener('load', function () {
          let color = colorThief.getColor(image);
          that.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
          // let span = document.getElementById('span');
          // span.style.background = 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
        });
      }
    }
  }
};
</script>

<style scoped lang="scss">
.img {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .cover {
    width: 200px;
    height: 200px;
    background-color: #cccccc;
  }
}
</style>
