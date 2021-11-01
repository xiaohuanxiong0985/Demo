<template>
  <div class="page-main">
    <div class="row">
      <template v-for="(item, index) in loadingList">
        <xhx-button class="item" :url="item.url" :key="index">{{ item.title }}</xhx-button>
      </template>
    </div>
    <div class="row">
      <template v-for="(item, index) in effectList">
        <xhx-button
          class="item"
          :key="index"
          :type="item.type"
          :color="item.color"
          :url="item.url">
          {{ item.title }}
        </xhx-button>
      </template>
    </div>
    <div class="row">
      <template v-for="(item, index) in canvasList">
        <xhx-button
          class="item"
          :key="index"
          :type="item.type"
          :color="item.color"
          :url="item.url">
          {{ item.title }}
        </xhx-button>
      </template>
    </div>
  </div>
</template>

<script>
import xhxButton from './button/index';
export default {
  data () {
    return {
      loadingList: [
        { title: '样式一', url: '/loading/demo1' },
        { title: '样式二', url: '/loading/demo2' },
        { title: '样式三', url: '/loading/demo3' },
        { title: '样式四', url: '/loading/demo4' },
        { title: '样式五', url: '/loading/demo5' }
      ],
      effectList: [
        { title: '渐变背景', color: '#feca57', type: 'demo2', url: '/background/demo1' },
        { title: '日环食', color: '#0abde3', type: 'demo2', url: '/background/demo2' },
        { title: '视差滚动', color: '#54a0ff', type: 'demo2', url: '/background/demo4' },
        { title: '哔哩哔哩', color: '#00d2d3', type: 'demo2', url: '/background/demo5' }
        // { title: '仪表盘', color: '#c8d6e5', type: 'demo2', url: '/dashboard' },
        // { title: '购物清单', color: '#e74c3c', type: 'demo2', url: '/cart/demo1' }
      ],
      canvasList: [
        { title: 'canvas动画', color: '#0abde3', type: 'demo3', url: '/canvas/demo1' },
        { title: '根据图片变色', color: '#0abde3', type: 'demo3', url: '/canvas/demo2' },
        { title: 'canvas仪表盘', color: '#0abde3', type: 'demo3', url: '/canvas/demo3' }
      ]
    };
  },
  components: {
    xhxButton
  },
  mounted () {
    // console.log(this)
    // console.log($)
  },
  methods: {
  }
};
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
