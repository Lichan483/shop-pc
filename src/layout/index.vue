<template>
    <el-container class="mycontainer">
      <el-aside width="230px" class="asside">
        <Menu></Menu>
      </el-aside>
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="mymain">Main</el-main>
      </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Menu from './Menu.vue';
</script>

<style scoped lang="scss">
.mycontainer{
    height: 100%;
  .asside{
      background-color: #304156;
  }
  .header{
    background-color: blueviolet;
  }
  .mymain{
    background-color: seagreen;
  }
}
</style>