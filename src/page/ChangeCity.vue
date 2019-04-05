<template>
  <div class="page-changeCity">
    <el-row>
      <province/>
    </el-row>
    <el-row>
      <hot title="热门城市:" :list="hotList"/>
    </el-row>
    <el-row>
      <hot title="最近访问:" :list="rencentList"/>
    </el-row>
    <el-row>
        <categroy />
    </el-row>
  </div>
</template>

<script>
import Province from "@/components/changeCity/Province";
import Hot from "@/components/changeCity/Hot";
import Categroy from "@/components/changeCity/Categroy";
export default {
  components: {
    Province,
    Hot,
    Categroy
  },
  data() {
    return {
      hotList: [
        "北京",
        "上海",
        "广州",
        "深圳",
        "天津",
        "西安",
        "重庆",
        "杭州",
        "南京",
        "武汉",
        "成都"
      ],
      rencentList: ["重庆", "杭州", "南京", "武汉", "成都"]
    };
  }
};
</script>

<style lang="scss">
</style>