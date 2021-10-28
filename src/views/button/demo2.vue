<template>
  <router-link :to="url" class="button" :class="`${colorType}`" :style="{ '--color': color }">
    <slot>霓虹灯按钮</slot>
    <span class="line line1"></span>
    <span class="line line2"></span>
    <span class="line line3"></span>
    <span class="line line4"></span>
  </router-link>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '/'
    },
    colorType: {
      type: String,
      default: 'default'
    },
    color: {
      type: String,
      default: '#3498db'
    }
  }
};
</script>

<style scoped lang="scss">
//  动态计算色值
$red: #e74c3c;
$orange: #ff9900;
$green: #03e94f;
$default: #3498db;
$map: ($red: red, $orange: orange, $green: green, $default: default);

@mixin btnColor($color) {
  color: $color;
}
@mixin bgColor($color) {
  background-color: $color;
}
.button {
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  transition: .5s;
  letter-spacing: 4px;
  overflow: hidden;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  /* 修改一下,可以随便传入颜色 */
  @include btnColor(var(--color));
  &:hover {
    @include bgColor(var(--color));
    color: #050801;
    box-shadow: 0 0 5px var(--color), 0 0 25px var(--color), 0 0 50px var(--color), 0 0 200px var(--color);
  }
  .line {
    position: absolute;
    display: block;
    &.line1 {
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(90deg, transparent, var(--color));
      animation: animate1 1s linear infinite;
    }
    &.line2 {
      top: -100%;
      right: 0;
      width: 2px;
      height: 100%;
      background-image: linear-gradient(180deg, transparent, var(--color));
      animation: animate2 1s .25s infinite;
    }
    &.line3 {
      bottom: 0;
      right: -100%;
      width: 100%;
      height: 2px;
      background-image: linear-gradient(270deg, transparent, var(--color));
      animation: animate3 1s .5s infinite;
    }
    &.line4 {
      bottom: 0;
      left: 0;
      width: 2px;
      height: 100%;
      background-image: linear-gradient(360deg, transparent, var(--color));
      animation: animate4 1s .75s infinite;
    }
  }
  /* 只能传入设定的值 */
  //@each $color, $colorName in $map {
  //  &.#{$colorName} {
  //    @include btnColor($color);
  //    &:hover {
  //      @include bgColor($color);
  //      color: #050801;
  //      box-shadow: 0 0 5px $color, 0 0 25px $color, 0 0 50px $color, 0 0 200px $color;
  //    }
  //    .line {
  //      position: absolute;
  //      display: block;
  //      &.line1 {
  //        top: 0;
  //        left: -100%;
  //        width: 100%;
  //        height: 2px;
  //        background-image: linear-gradient(90deg, transparent, $color);
  //        animation: animate1 1s linear infinite;
  //      }
  //      &.line2 {
  //        top: -100%;
  //        right: 0;
  //        width: 2px;
  //        height: 100%;
  //        background-image: linear-gradient(180deg, transparent, $color);
  //        animation: animate2 1s .25s infinite;
  //      }
  //      &.line3 {
  //        bottom: 0;
  //        right: -100%;
  //        width: 100%;
  //        height: 2px;
  //        background-image: linear-gradient(270deg, transparent, $color);
  //        animation: animate3 1s .5s infinite;
  //      }
  //      &.line4 {
  //        bottom: 0;
  //        left: 0;
  //        width: 2px;
  //        height: 100%;
  //        background-image: linear-gradient(360deg, transparent, $color);
  //        animation: animate4 1s .75s infinite;
  //      }
  //    }
  //  }
  //}
}
@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
}
@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%, 100% {
    top: 100%;
  }
}
@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%, 100% {
    right: 100%;
  }
}
@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%, 100% {
    bottom: 100%;
  }
}
</style>
