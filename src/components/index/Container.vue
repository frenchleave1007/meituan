<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :data-type="item.tab"
        :class="{active:kind==item.tab}"
      >{{item.text}}</dd>
      <!-- <dt>有格调</dt>
      <dd data-type="all" :class="{active:kind=='all'}">全部</dd>
      <dd data-type="food" :class="{active:kind=='food'}">约会聚餐</dd>
      <dd data-type="spa" :class="{active:kind=='spa'}">丽人SPA</dd>
      <dd data-type="movie" :class="{active:kind=='movie'}">电影演出</dd>
      <dd data-type="travel" :class="{active:kind=='travel'}">品质出游</dd>-->
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <!-- <span class="old-price">￥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <!-- <span class="price-symbol numfont">¥</span> -->
                <span class="current-price numfont">抢光了</span>
              </span>
              <!-- <span class="old-price">￥{{item.price_info.old_price}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else>
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.avg_price}}</span>
                <span class="units">/{{item.price_info.units}}</span>
              </span>
              <!-- <span class="old-price">/{{item.price_info.units}}</span> -->
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: "39.5",
            old_price: "门市价¥79",
            avg_price: null,
            units: null
          },
          address: "春熙路",
          rentNum: 0
        },
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: null,
            old_price: null,
            avg_price: 18,
            units: "人均"
          },
          address: "春熙路",
          rentNum: 2
        },
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: "39.5",
            old_price: "门市价¥79"
          },
          address: "春熙路",
          rentNum: 2
        },
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: "39.5",
            old_price: "门市价¥79"
          },
          address: "春熙路",
          rentNum: 2
        },
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: "39.5",
            old_price: "门市价¥79"
          },
          address: "春熙路",
          rentNum: 2
        },
        {
          image:
            "//p1.meituan.net/msmerchant/a316aecb8e8db3a2dda8e7d7f93137a41454100.jpg@368w_208h_1e_1c",
          title: "必胜客（蜀都店）",
          sub_title: "【周三半价】法式肋眼牛排1份",
          price_info: {
            current_price: "39.5",
            old_price: "门市价¥79"
          },
          address: "春熙路",
          rentNum: 2
        }
      ],
      resultsData:{}
    };
  },
  props: [
    "nav" //接收父组件传来的数据
  ],
  created (){
    api.resultsByKeywords().then((res) => {
      this.resultsData = res.data.data
      // console.log(res)
      // console.log(this.resultsData)
    })
  },
  methods: {
    over(e) {
      //   console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      //   console.log(tagName);
      if (tagName != "dd") {
        return false;
      } else {
        this.kind = dom.getAttribute("data-type");
        //动态获取新的数据  ajax请求
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>