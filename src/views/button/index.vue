<template>
  <div>
    <demo1 v-if="type === 'demo1'" :colorType="colorType" :url="url">{{ title }}</demo1>
    <demo2 v-if="type === 'demo2'" :colorType="colorType" :url="url">{{ title }}</demo2>
  </div>
</template>

<script>
import demo1 from './demo1'
import demo2 from './demo2'
export default {
  props: {
    title: {
      type: String,
      default: 'button'
    },
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
    }
  },
  components: {
    demo1,
    demo2
  }
}
</script>

<style scoped>

</style>