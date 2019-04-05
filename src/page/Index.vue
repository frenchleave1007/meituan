<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu/>
      </el-col>
      <el-col :span="19">
        <my-life/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="iStyle"/>
      </el-col>
      <el-col :span="24">
        <container :nav="recomment"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MyMenu from "@/components/index/Menu";
import MyLife from "@/components/index/Life";
import Container from "@/components/index/Container";
export default {
  data() {
    return {
      iStyle: {
        class:'iStyle',
        title: "有格调",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "约会聚餐"
          },
          {
            tab: "spa",
            text: "丽人SPA"
          },
          {
            tab: "movie",
            text: "电影演出"
          },
          {
            tab: "travel",
            text: "品质出游"
          }
        ]
      },
      recomment: {
        class:'youhui',
        title: "狠优惠",
        list: [
          {
            tab: "all",
            text: "全部"
          },
          {
            tab: "food",
            text: "美食"
          },
          {
            tab: "xiuxian",
            text: "休闲"
          }
        ]
      }
    };
  },
  components: {
    MyMenu,
    MyLife,
    Container
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>