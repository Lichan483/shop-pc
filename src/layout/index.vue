<template>
    <el-container class="mycontainer">
      <el-aside width="auto" class="asside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Collapse></Collapse>
          <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main class="mymain">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
import Collapse from './Collapse.vue';
import BreadCrumb from './BredCrumb.vue';
</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
  .asside{
      background-color: #304156;
  }
  .header{
    background-color: #009688;
    color: #fff;
    display: flex;
    align-items: center;
  }
  // .mymain{
  //   // background-color: seagreen;
  // }
}
</style>