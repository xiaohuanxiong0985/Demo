<template>
  <header>
    <div><img src="@/assets/img/autumn/autumn-1.png" alt="图片"></div>
    <div><img src="@/assets/img/autumn/autumn-2.png" alt="图片"></div>
    <div><img src="@/assets/img/autumn/autumn-3.png" alt="图片"></div>
    <div><img src="@/assets/img/autumn/autumn-4.png" alt="图片"></div>
    <div><img src="@/assets/img/autumn/autumn-5.png" alt="图片"></div>
    <div><img src="@/assets/img/autumn/autumn-6.png" alt="图片"></div>
  </header>
</template>

<script>
export default {
  //  2020年bilibili秋头部动画效果
  name: 'autumn',
  data () {
    return {
      list: [
        require('@/assets/img/autumn/autumn-2.png'),
        require('@/assets/img/autumn/autumn-2-1.png'),
        require('@/assets/img/autumn/autumn-2-2.png'),
        require('@/assets/img/autumn/autumn-2-1.png'),
        require('@/assets/img/autumn/autumn-2.png')
      ]
    };
  },
  mounted () {
    this.$nextTick(() => {
      const images = document.querySelectorAll('header > div > img'); //  获取到所有img元素
      document.querySelector('header').addEventListener('mousemove', e => {
        //  给头部标签添加鼠标移动事件
        let percentage = e.clientX / window.outerWidth; //  计算移动百分比,设置最左为0,最右为1;
        let offset = 10 * percentage; //  定义图片分层距离
        let blur = 20; //  定义移动距离,模糊度
        for (let [index, image] of images.entries()) {
          //  使用for of方法获取到所有img元素的属性
          offset *= 1.3; //  越往后的图片,位移的位置越多
          let blurValue = (Math.pow((index / images.length - percentage), 2) * blur); //  计算分层模糊度
          image.style.setProperty('--offset', `${offset}px`);
          image.style.setProperty('--blur', `${blurValue}px`);
        }
      });
      //  鼠标移出的时候还原回去
      document.querySelector('header').addEventListener('mouseout', e => {
        for (let [index, image] of images.entries()) {
          image.style.setProperty('--offset', `0px`);
          image.style.setProperty('--blur', `2px`);
        }
      });
      //  眨眼睛
      const a = images[1];
      setInterval(() => {
        //  从2到2-1再到2-2再到2-1再到2
        this.change(a);
      }, 5000);
    });
  },
  methods: {
    change (a) {
      let i = 0;
      let timer = setInterval(() => {
        a.src = this.list[i];
        if (i < this.list.length - 1) {
          i++;
        } else {
          clearInterval(timer);
          i = 0;
        }
      }, 100);
    }
  }
};
</script>

<style scoped lang="scss">
header {
  height: 160px;
  position: relative;
  overflow: hidden;
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --offset: 0;
    --blur: 2px;
    img {
      display: block;
      width: 110%;
      height: 100%;
      object-fit: cover;
      transform: translateX(var(--offset)); /* 移动 */
      filter: blur(var(--blur));  /* 模糊 */
    }
  }
}
</style>
