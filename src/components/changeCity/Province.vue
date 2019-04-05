<template>
  <div>
    <span class="name">按省份选择：</span>
    <my-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showWrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <my-select
      :list="cityList"
      title="城市"
      :value="city"
      :showWrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
      :disabled="cityDisabled"
    />
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import MySelect from "./Select";
export default {
  components: {
    MySelect
  },
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      province: "省份",
      cityList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      city: "城市",
      cityActive: false,
      provinceActive: false,
      searchList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州",
        "安徽",
        "澳门",
        "湖南",
        "河北",
        "香港",
        "辽宁",
        "四川",
        "宁夏",
        "吉林",
        "福建",
        "湖北",
        "广东",
        "重庆",
        "山西",
        "江西",
        "黑龙江",
        "青海",
        "河南",
        "台湾",
        "内蒙古",
        "西藏",
        "广西"
      ],
      searchWord:'',
      loading:false,
      cityDisabled:true
    };
  },
  methods: {
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(val){
        // console.log(val)
        // 请求后端接口
    },
    changeCity(value){
      this.city = value;
      this.$store.dispatch('setPosition',value);
      this.$router.push({name:'index'})
    },
    changeProvince(value){
      this.province = value;
      this.cityDisabled = false;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";
</style>