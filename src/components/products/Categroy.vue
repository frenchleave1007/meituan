<template>
  <div class="m-product-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="item in classicList" :key="item.type">
        <my-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>区域</dt>
      <dt>全部</dt>
      <dd v-for="item in areaList" :key="item.type">
        <my-select :name="item.title" :list="item.subList"/>
      </dd>
    </dl>
  </div>
</template>

<script>
import MySelect from "./Select";
export default {
  data() {
    return {
      classicList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            },
            {
              name: "饮品店",
              id: "drink"
            },
            {
              name: "面包甜点",
              id: "cate"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            },
            {
              name: "经济型酒店",
              id: "economy"
            },
            {
              name: "高端酒店",
              id: "height"
            }
          ]
        }
      ],
      areaList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "武侯区",
              id: "001"
            },
            {
              name: "青羊区",
              id: "002"
            },
            {
              name: "成华区",
              id: "003"
            }
          ]
        },
        {
          title: "郫都区",
          subList: [
            {
              name: "武侯区",
              id: "001"
            },
            {
              name: "青羊区",
              id: "002"
            },
            {
              name: "成华区",
              id: "003"
            }
          ]
        }
      ]
    };
  },
  components: {
    MySelect
  }
};
</script>

<style scoped>
</style>