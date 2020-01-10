<template>
  <div>
    <van-field
      v-for="(item, index) in dataList"
      :key="index"
      :is-link="item.link"
      :readonly="item.readonly"
      :placeholder="item.placeholder || getPlaceholder(item)"
      @input="eventTel"
      @click="show = true"
      class="chrray-login-input">
    </van-field>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '30%' }">
      <van-picker
        :columns="columns">
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, picker } from 'vant';
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: false
    };
  },
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [picker.name]: picker
},
  methods: {
    eventTel (value) {
      this.$emit('event', value);
    },
    getPlaceholder (row) {
      let placeholder;
      if (!row.link) {
        placeholder = '请输入' + row.label;
      } else if (row.link) {
        placeholder = '请选择' + row.label;
      } else {
        placeholder = row.label;
      }
      return placeholder;
    }
  }
};
</script>

<style lang="less">
  .chrray-login-input {
    padding: 30px 0;
    color: #000;
    &:after {
      position: absolute;
      box-sizing: border-box;
      content: ' ';
      pointer-events: none;
      right: 0;
      bottom: 0;
      left: 0 !important;
      border-bottom: 0.02667rem solid #eee;
      -webkit-transform: scaleY(.5);
      -ms-transform: scaleY(.5);
      transform: scaleY(.5);
      top: 86px;
    }
  }
</style>
