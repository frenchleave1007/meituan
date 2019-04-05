<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            v-model="searchWord"
            placeholder="搜索商家或地点"
            @focus="focus"
            @blur="blur"
            @input="input"
          ></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <!-- <dd>
              <router-link to="/">大熊猫繁育研究基地</router-link>
              <router-link to="/">成都市植物园</router-link>
              <router-link to="/">漫花庄园</router-link>
              <router-link to="/">成都欢乐谷</router-link>
            </dd>-->
            <dd v-for="(item,index) in hotPlaceList.slice(0,5)" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <!-- <dd>
              <router-link to="/">火锅</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅自助餐</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅2人餐</router-link>
            </dd>
            <dd>
              <router-link to="/">火锅冒菜</router-link>
            </dd>-->
            <dd v-for="(item,index) in searchList" :key="index">
              <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <!-- <a href="#">大熊猫繁育研究基地</a>
          <a href="#">成都市植物园</a>
          <a href="#">漫花庄园</a>
          <a href="#">成都欢乐谷</a>
          <a href="#">成都梵高星空艺术馆</a>
          <a href="#">音乐百花谷</a>
          <a href="#">中影嘉莱国际影城</a>
          <a href="#">成都星空·失恋博物馆</a>-->
          <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [
        // "火锅",
        // "大熊猫繁育研究基地",
        // "成都市植物园",
        // "漫花庄园",
        // "成都欢乐谷"
      ],
      searchList: [
        // "火锅", "火锅自助餐", "火锅2人餐", "火锅冒菜"
      ],
      suggestList: [
        // "火锅",
        // "大熊猫繁育研究基地",
        // "成都市植物园",
        // "漫花庄园",
        // "成都欢乐谷",
        // "成都梵高星空艺术馆",
        // "音乐百花谷",
        // "中影嘉莱国际影城",
        // "成都星空·失恋博物馆"
      ]
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList: function() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      let self = this;
      setTimeout(() => {
        self.isFocus = false;
      }, 200);
    },
    input() {
      let val = this.searchWord
      api.getSearchList().then(res => {
        console.log(res);
        this.searchList = res.data.data.list.filter((item,index) => {
          return item.indexOf(val) > -1;
        });
      });
    }
  },
  created() {
    api.searchHotWords().then(res => {
      // console.log(res);
      this.hotPlaceList = res.data.data;
      this.suggestList = res.data.data;
    });
  },
  mounted() {}
};
</script>

<style lang="scss">
// @import "@/assets/css/public/header/search.scss";
// @import "@/assets/css/public/header/index.scss";
</style>
