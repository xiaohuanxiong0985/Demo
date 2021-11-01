<template>
  <div class="chrray-main">
    <section class="showChose" v-show="showChose">
      <section class="address">
        <!--<section class="title">-->
          <!--<h4>居住地址</h4>-->
          <!--<span @click="closeAdd()">×</span>-->
        <!--</section>-->
        <section class="title" v-if="info1.length > 0">
          <div class="area" @click="provinceSelected()">{{Province ? Province : info1[province-1].miaoShu }}</div>
          <div class="area" @click="citySelected()" :class="City?'':'active'">{{City?City:'请选择'}}</div>
          <div class="area" @click="districtSelected()" :class="District?'':'active'">{{District?District:'请选择'}}</div>
          <div class="area" @click="streetSelected()" :class="street?'':'active'" >{{street ? street : '请选择'}}</div>
        </section>
        <ul class="hx-addres-container" v-loading="loading">
          <li class="addList" v-for="(v,k) in info1" @click="getProvinceId(v.daiMa, v.miaoShu, v.cengJi, k)" v-show="showProvince" :class="v.selected ? 'active' : ''">{{v.miaoShu}}</li>
          <li class="addList" v-for="(v,k) in showCityList" @click="getCityId(v.daiMa, v.miaoShu, v.cengJi, k)" v-show="showCity" :class="v.selected ? 'active' : ''">{{v.miaoShu}}</li>
          <li class="addList" v-for="(v,k) in showDistrictList" @click="getDistrictId(v.daiMa, v.miaoShu, v.cengJi, k)" v-show="showDistrict" :class="v.selected ? 'active' : ''">{{v.miaoShu}}</li>
          <li class="addList" v-for="(v,k) in showStreeList" @click="getStreeId(v.daiMa, v.miaoShu, v.cengJi, k)" v-show="showStree" :class="v.selected ? 'active' : ''">{{v.miaoShu}}</li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'myAddress',
  data () {
    return {
      showChose: true,
      showProvince: true,
      showCity: false,
      showStree: false,
      showDistrict: false,
      showCityList: false,
      showDistrictList: false,
      showStreeList: false,
      province: 1,
      city: 3,
      district: 57,
      GetProvinceId: 2,
      District: false,
      Province: false,
      City: false,
      street: false,
      selected: false,
      info1: [],
      loading: true
    };
  },
  mounted () {

    // this.info1 = this.getApi(1, 0);
  },
  methods: {
    choseAdd: function () {
      this.showChose = true;
    },
    closeAdd: function () {
      this.showChose = false;
    },
    _filter (add, name, code) {
      let result = [];
      for (let i = 0; i < add.length; i++) {
        if (code == add[i].id) {
          result = add[i][name];
        }
      }
      return result;
    },
    getProvinceId: function (code, input, cengji, index) {
      this.province = code;
      this.Province = input;
      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
      this.getApi(cengji, code).then(res => {
        this.showCityList = res;
      });
      // 点击选择当前
      this.info1.map(a => a.selected = false);
      this.info1[index].selected = true;
    },
    provinceSelected: function () {
      // 清除市级和区级列表
      this.showCityList = false;
      this.showDistrictList = false;
      this.showStreeList = false;
      // 清除市级和区级选项
      this.City = false;
      this.District = false;
      this.street = false;
      // 选项页面的切换
      this.showProvince = true;
      this.showCity = false;
      this.showDistrict = false;
      this.showStree = false;
    },
    getCityId: function (code, input, cengji, index) {
      this.city = code;
      this.City = input;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
      this.getApi(cengji, code).then(res => {
        this.showDistrictList = res;
      });
      // this.showDistrictList = this._filter(this.showCityList,'district',this.city);
      // 选择当前添加active
      this.showCityList.map(a => a.selected = false);
      this.showCityList[index].selected = true;
    },
    citySelected: function () {
      this.showDistrictList = false;
      this.showStreeList = false;

      this.District = false;
      this.street = false;

      this.showProvince = false;
      this.showCity = true;
      this.showDistrict = false;
      this.showStree = false;
    },
    getDistrictId: function (code, input, cengji, index) {
      this.district = code;
      this.District = input;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = false;
      this.showStree = true;
      this.getApi(cengji, code).then(res => {
        this.showStreeList = res;
      });
      // 选择当前添加active
      this.showDistrictList.map(a => a.selected = false);
      this.showDistrictList[index].selected = true;
      // 选取市区选项之后关闭弹层
      // this.showChose = false;
    },
    districtSelected: function () {
      this.showStreeList = false;

      this.street = false;

      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = true;
      this.showStree = false;
    },
    //  街道选取
    getStreeId (code, input, cengji, index) {
      this.city = code;
      this.street = input;
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = false;
      this.showStree = true;
      // this.getApi(cengji, code).then(res => {
      //   this.showDistrictList = res
      // });
      // this.showDistrictList = this._filter(this.showCityList,'district',this.city);
      // 选择当前添加active
      this.showStreeList.map(a => a.selected = false);
      this.showStreeList[index].selected = true;
      // this.showChose = false;
    },
    //  点击街道时
    streetSelected () {
      this.showProvince = false;
      this.showCity = false;
      this.showDistrict = false;
      this.showStree = true;
    }
  }
};
</script>

<style scoped lang="scss">
.showChose {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  .address {
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    .title {
      display: flex;
      padding: 1rem;
      border-bottom: 1px solid #eee;
      .area {
        margin-right: .5rem;
      }
    }
    .hx-addres-container {
      list-style: none;
      overflow-y: auto;
      height: 10rem;
      max-height: 15rem;
      padding: 0;
      margin: 0;
      .addList {
        line-height: 2.5;
        margin-left: 1rem;
        box-sizing: border-box;
        &.active {
          color: red;
        }
      }
    }
  }
}

</style>
