<template>
  <el-form ref="form" v-if="Object.keys(valueList).length" :label-width="labelWidth" :model="valueList" :rules="rules">
    <el-form-item
      v-for="(item, index) in list"
      :key="`${_uid}_${index}`"
      :prop="item.name"
      :label="item.label">
      <component :is="item.type" v-model="valueList[item.name]">
        <template v-if="item.children">
          <component
            v-for="(child, i) in item.children.list"
            :is="item.children.type"
            :key="`${_uid}_${index}_${i}`"
            :label="child.title"
            :value="child.value">
          </component>
        </template>
      </component>
    </el-form-item>
    <el-form-item>
      <slot name="footer"></slot>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'formGrop',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
  },
  data () {
    return {
      initValueList: [],
      rules: {},
      valueList: {},
    };
  },
  mounted () {
    this.setInitValue()
  },
  methods: {
    setInitValue () {
      //  映射传过来数组中的value
      let rules = {};
      let valueList = {};
      let initValueList = {};
      this.list.forEach(item => {
        rules[item.name] = item.rule;
        valueList[item.name] = item.value;
        initValueList[item.name] = item.value;
      });
      console.log(rules)
      this.rules = rules;
      this.valueList = valueList;
      this.initValueList = initValueList;
    },
    //  提交时验证方法
    validate (cb) {
      this.$refs.form.validate(valid => {
        cb(valid)
      })
    },
    //  重置方法
    handleReset () {
      this.valueList = JSON.parse(JSON.stringify(this.initValueList));
    }
  },
  watch: {
    list () {
      this.setInitValue()
    }
  }
};
</script>

<style scoped>

</style>