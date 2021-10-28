<template>
  <div class="main">
    <div class="items" v-for="item in 5" :key="item" >{{ item }}</div>
  </div>
</template>

<script>
import fn from './demo1';
export default {
  name: 'demo1',
  data () {
    return {
      nodes: ''
    };
  },
  mounted () {
    fn.makeSound(new fn.Duck());
    fn.makeSound(new fn.Chicken());
    fn.makeSound(new fn.Dog());
    fn.renderMap(fn.baiduMap);
    console.log(fn.myObject().getName());
    console.log(fn.myObject().__name); //  访问不到私有变量的,会出现undefined
    console.log(fn.mult(1, 2, 3));
  },
  methods: {
    mult () {
      let chche = {};
      return function () {
        const args = Array.prototype.join.call(arguments, ',');
        if (args in caches) {
          return caches[args];
        }
        let a = 1;
        for (let i = 0, l = arguments.length; i < l; i++) {
          a = a * arguments[i];
        }
        return caches[args] = a;
      };
    }
  }
};
</script>

<style scoped>

</style>
