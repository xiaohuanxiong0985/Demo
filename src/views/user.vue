<template>
  <div class="chrray-main">
    <div class="bg">
      <img class="pointer" src="@/assets/img/pointer.png" alt="" @click="onClick">
      <img class="turntable" src="@/assets/img/turntable.png" alt="">
    </div>
  </div>
</template>

<script>
import GetRand from '@/utils/getRand'
import { prob } from 'api/user'
export default {
  data () {
    return {
      obj: [
        { name: '商品一', prob: 1 },
        { name: '商品二', prob: 2 },
        { name: '商品三', prob: 3 },
        { name: '商品四', prob: 4 },
        { name: '商品五', prob: 5 },
        { name: '谢谢惠顾', prob: 95 },
      ],
      goods: {},
      offOn: true,
      oPointer: null,
      oTurntable: null,
      cat: 51.4,
      num: 0,
      timer: null,
      id: 4
    };
  },
  computed: {
    // sum () {
    //   let data = new GetRand();
    //   return data.getRand(this.obj)
    // }

  },
  mounted () {
    this.oPointer = document.getElementsByClassName('pointer')[0];
    this.oTurntable = document.getElementsByClassName('turntable')[0];
  },
  methods: {
    // choujiang () {
    //   let data = new GetRand();
    //   this.goods = data.getRand(this.obj)
    // }
    onClick () {
      let cre = 0;
      // that.oTurntable.style.transform = `rotate(${rdm}deg)`;
      this.oTurntable.style.transform = `rotate(${cre}deg)`;
      setTimeout(_ => {
        if (this.offOn) {
          this.oTurntable.style.transition = `all 4s ease`;
          this.offOn = !this.offOn;
          prob().then(res => {
            console.log(res)
            this.ratating(res.data.id);
          })
        }
      }, 500)
    },
    ratating (id) {
      let that = this;
      let rdm = 0;
      clearInterval(that.timer);
      this.timer = setInterval(_ => {
        if (Math.floor(rdm / 360 < 3)) {
          rdm = (360 * 5) + (51.4 * id - 25.7);
          console.log(rdm)
          // rdm = Math.floor(Math.random() * 3600);
        } else {
          that.oTurntable.style.transform = `rotate(${rdm}deg)`;
          clearInterval(that.timer);
          setTimeout(_ => {
            that.offOn = !that.offOn;
            that.num = Math.floor(rdm % 360);
            that.oTurntable.style.removeProperty('transition');
            switch (true) {
              case that.num <= that.cat * 1:
                console.log(`rmd=${rdm}, num=${this.num}, 一等奖`);
                break;
              case that.num <= that.cat * 2:
                console.log(`rmd=${rdm}, num=${this.num}, 二等奖`);
                break;
              case that.num <= that.cat * 3:
                console.log(`rmd=${rdm}, num=${this.num}, 三等奖`);
                break;
              case that.num <= that.cat * 4:
                console.log(`rmd=${rdm}, num=${this.num}, 四等奖`);
                break;
              case that.num <= that.cat * 5:
                console.log(`rmd=${rdm}, num=${this.num}, 五等奖`);
                break;
              case that.num <= that.cat * 6:
                console.log(`rmd=${rdm}, num=${this.num}, 六等奖`);
                break;
              case that.num <= that.cat * 7:
                console.log(`rmd=${rdm}, num=${this.num}, 七等奖`);
                break;
            }
          }, 4000)
        }
      }, 30)
    }
  }
};
</script>

<style scoped lang="scss">
.chrray-main {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .bg {
    width: 650PX;
    height: 600PX;
    margin: 0 auto;
    background: url("../assets/img/turntable-bg.jpg") no-repeat;
    position: relative;
    .pointer {
      position: absolute;
      z-index: 10;
      top: 155PX;
      left: 247PX;
    }
    .turntable {
      position: absolute;
      z-index: 5;
      top: 60PX;
      left: 116PX;
    }
  }
}
</style>
