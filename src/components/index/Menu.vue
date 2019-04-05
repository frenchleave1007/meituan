<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
        <i :class="item.type"></i>
        {{item.name}}
        <span class="arrow"></span>
      </dd>
      <!-- <dd>
        <i class="takeout"></i>
        外卖
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="hotel"></i>
        酒店
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="homestay"></i>
        榛果民宿
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="movie"></i>
        猫眼电影
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="airport"></i>
        机票 / 火车票
        <span class="arrow"></span>
      </dd>
      <dd>
        <i class="ktv"></i>
        休闲娱乐 / KTV
        <span class="arrow"></span>
      </dd> -->
    </dl>
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items">
        <h2 :key="index">{{item.title}}</h2>
        <span v-for="(v,i) in item.items" :key="v+'_'+i">{{v}}</span>
        <!-- <span>代金券</span>
        <span>甜点</span>
        <span>饮品</span>
        <span>火锅</span>
        <span>自助餐</span>
        <span>小吃</span>
        <span>代金券</span>
        <span>甜点</span>
        <span>饮品</span>
        <span>火锅</span>
        <span>自助餐</span>
        <span>小吃</span>-->
      </template>
    </div>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      curDetail: null,
      menuList: [
        // {
        //   title: "美食",
        //   icon: "food",
        //   children: [
        //     {
        //       title: "美食",
        //       children: [
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: "外卖",
        //   icon: "takeout",
        //   children: [
        //     {
        //       title: "外卖",
        //       children: [
        //         "美团外卖",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: "酒店",
        //   icon: "hotel",
        //   children: [
        //     {
        //       title: "酒店",
        //       children: [
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: "榛果民宿",
        //   icon: "homestay",
        //   children: [
        //     {
        //       title: "榛果民宿",
        //       children: [
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ]
        //     }
        //   ]
        // },
        // {
        //   title: "猫眼电影",
        //   icon: "movie",
        //   children: [
        //     {
        //       title: "猫眼电影",
        //       children: [
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ],
        //       children: [
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃",
        //         "代金券",
        //         "甜品",
        //         "饮品",
        //         "火锅",
        //         "自助餐",
        //         "小吃"
        //       ]
        //     }
        //   ]
        // },
      ]
    };
  },
  created(){
    api.getMenuList().then(res => {
      this.menuList = res.data.data
      // console.log(res)
    })
  },
  methods:{
    menuEnter(item){
      // console.log(item);
      this.curDetail = item;
    },
    menuLeave(){
      var self = this;
      this.timer = setTimeout(() => {
        self.curDetail = null;
      }, 200);
    },
    detailEnter(){
      clearTimeout(this.timer)
    },
    detailLeave(){
      this.curDetail = null;
    }
  }
};
</script>

