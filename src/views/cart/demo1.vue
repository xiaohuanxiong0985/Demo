<template>
  <div class="phone">
    <div class="cart">
      <div class="cart__left">
        <ul class="nav__list">
          <li v-for="(item, index) in 3"
              :key="index"
              class="nav__list__item"
              :class="{ active: index === navIndex }"
              @click="handleTab(index)"
          >{{ `按钮${index}` }}</li>
        </ul>
      </div>
      <div class="cart__right">
        <div class="shop__list">
          <h5 class="nav__title">{{ `按钮${navIndex}` }}</h5>
          <div class="shop__list__item" v-for="(item, index) in newShopList" :key="index">
            <img :src="item.imgUrl" :alt="item" class="cover">
            <div class="info">
              <p>{{ item.name }}</p>
              <div class="btn__wrap">
                <span :hidden="!item.number" class="btn__wrap__icon" @click="handleRemove(item, index)">-</span>
                <span :hidden="!item.number">{{ item.number }}</span>
                <span class="btn__wrap__icon" @click="handleAdd(item, index)">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart__box" v-show="cartList.length">
        <div>{{ `已选${cartList.length}件商品` }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      navIndex: 0,
      shopList: [],
      cartList: []
    };
  },
  computed: {
    //  合并数组,用于形成新对象来实现切换tab后数据还在
    newShopList () {
      const list = [...this.cartList].filter(x => [...this.shopList].some(y => y.id === x.id));
      return this.deduplication(this.shopList.concat(list), 'id');
    }
  },
  methods: {
    //  数组对象合并去重取后面的值为最新值
    deduplication (arr, key) {
      const obj = {};
      // 利用reduce方法遍历数组，reduce第一个参数是遍历要执行的函数，第二个参数是item的初始值
      return arr.reduce((item, next) => {
        if (!obj[next[key]]) {
          obj[next[key]] = true;
          item.push(next);
        } else {
          const index = item.findIndex(v => v.id === next.id);
          this.$set(item, index, next);
        }
        return item;
      }, []);
    },
    //  tab切换
    handleTab (index) {
      this.navIndex = index;
    },
    //  新增商品
    handleAdd (item, index) {
      item.number = item.number ? ++item.number : 1;
      this.$set(this.shopList, index, item);
      const isItem = this.cartList.some(v => v.id === item.id);
      if (!isItem) {
        this.cartList.push(item);
      }
    },
    //  减少商品
    handleRemove (item, index) {
      item.number = item.number ? --item.number : 0;
      this.$set(this.shopList, index, item);
      const isItem = this.cartList.some(v => v.id === item.id);
      if (isItem && !item.number) {
        this.cartList.splice(this.cartList.findIndex(v => v.id === item.id), 1);
      }
    }
  },
  watch: {
    navIndex: {
      handler (val, old) {
        axios.get(`https://www.fastmock.site/mock/2ff9d5d575724c586c61a887a4ee50f7/api/shop${val}`).then(res => {
          this.shopList = res.data.data;
        });
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
.phone {
  width: 375px;
  height: 667px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #eee;
}
.cart {
  display: flex;
  flex-direction: row;
  position: relative;
  &__left {
    width: 30%;
    height: 667px;
    .nav__list {
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: scroll;
      margin: 0;
      padding: 0;
      list-style: none;
      &__item {
        line-height: 5;
        text-align: center;
        background-color: #eee;
        border-left: 3px solid transparent;
        cursor: pointer;
        user-select: none;
        &.active {
          background-color: #fff;
          border-color: red;
          cursor: inherit;
        }
      }
    }
  }
  &__right {
    width: 70%;
    height: 667px;
    .shop__list {
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 0 15px;
      .nav__title {
        font-size: 16px;
        margin: 0;
        line-height: 3;
      }
      &__item {
        display: flex;
        & + .shop__list__item {
          margin-top: 10px;
        }
        .cover {
          width: 100px;
          height: 100px;
          border-radius: 8px;
        }
        .info {
          padding-left: 20px;
          .btn__wrap {
            display: flex;
            justify-content: right;
            user-select: none;
            &__icon {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
  &__box {
    width: 100%;
    height: 100px;
    position: absolute;
    bottom: 0;
    border: 1px solid red;
  }
}
</style>
