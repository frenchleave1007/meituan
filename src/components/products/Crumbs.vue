<template>
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/' }">成都美团</el-breadcrumb-item> -->
      <el-breadcrumb-item>{{$store.state.position}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{$store.state.position}}美食</el-breadcrumb-item>
      <el-breadcrumb-item>{{$store.state.position}}{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// @import '@/assets/css/products/index.scss'
</style>