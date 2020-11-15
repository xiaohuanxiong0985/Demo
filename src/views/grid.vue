<template>
  <div class="main">
    <div class="grid">
      <div v-for="item in 9" :key="item" class="grid-item" :class="'item'+item" data-text="图片">
        <!--<div>-->
        <!--  <img :src="'https://picsum.photos/360/520?random='+item" class="img">-->
        <!--</div>-->
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid'
};
</script>

<style scoped lang="scss">
$item1: #1abc9c;
$item2: #2ecc71;
$item3: #3498db;
$item4: #9b59b6;
$item5: #16a085;
$item6: #27ae60;
$item7: #2980b9;
$item8: #8e44ad;
$item9: #f1c40f;
$emotion-map: (
  1: $item1,
  2: $item2,
  3: $item3,
  4: $item4,
  5: $item5,
  6: $item6,
  7: $item7,
  8: $item8,
  9: $item9,
);
@mixin bgColor($color) {
  background-color: $color;
}
.main {
  width: 100vw;
  height: 100vh;
/*  display: flex;*/
/*  align-items: center;*/
/*  justify-content: center;*/
  padding: 20px;
  box-sizing: border-box;
  .grid {
    /*width: 100%;*/
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    /*grid-template-rows: repeat(3, 33.33%);*/
    /*grid-column-gap: 20px;*/
    /*grid-row-gap: 20px;*/
    grid-gap: 20px;
    grid-auto-flow: row;
    justify-items: stretch;
    align-items: stretch;
    justify-content: center;
    align-content: center;
    &-item {
      @for $i from 1 to 10 {
        &.item#{$i} {
          @include bgColor(map-get($emotion-map, $i));
        }
      }
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        .img {
          height: 300px;
          object-fit: cover;
          display: block;
        }
      }

    }
  }
}
</style>
