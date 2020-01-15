<template>
  <div>
    <van-field
      v-for="(item, index) in dataList"
      :key="index"
      :is-link="item.link"
      :readonly="item.readonly"
      :type="item.type"
      :maxlength="item.max"
      :right-icon="item.icon"
      :placeholder="item.placeholder || getPlaceholder(item)"
      @input="eventTel(item.prop, $event)"
      @click="jump(item)"
      class="chrray-login-input">
      <van-button
        v-if="item.slot"
        plain
        color="#999999"
        slot="button"
        size="small"
        type="primary">{{ item.btnText }}</van-button>
    </van-field>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '40%' }">
      <!--        <van-picker :columns="items.text"></van-picker>-->
    </van-popup>
  </div>
</template>

<script>
import { Field, Popup, Picker, Button } from 'vant';
export default {
  props: {
    dataList: {
      type: Array,
      default: () => []
    },
    formData: {
      type: Object,
      default: () => {}
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      show: false,
      value: ''
    };
  },
  components: {
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Button.name]: Button
  },
  methods: {
    //  输入事件
    eventTel (type, value) {
      this.$emit('event', type, value);
    },
    //  点击事件
    jump (value) {
      if (value.link) {
        this.show = true;
        this.$emit('jump', value);
      }
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
