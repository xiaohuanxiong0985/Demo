<template>
  <div>
    <demo1 v-if="type === 'demo1'" :colorType="colorType" :url="url">
      <slot>loading</slot>
    </demo1>
    <demo2 v-if="type === 'demo2'" :colorType="colorType" :color="color" :url="url">
      <slot>按钮</slot>
    </demo2>
    <demo3 v-if="type === 'demo3'" :colorType="colorType" :color="color" :url="url">
      <slot>按钮</slot>
    </demo3>
  </div>
</template>

<script>
import demo1 from './demo1';
import demo2 from './demo2';
import demo3 from './demo3';
export default {
  props: {
    url: {
      type: String,
      default: '/'
    },
    type: {
      type: String,
      default: 'demo1'
    },
    colorType: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: '#3498db'
    }
  },
  components: {
    demo1,
    demo2,
    demo3
  }
};
</script>

<style scoped>

</style>
