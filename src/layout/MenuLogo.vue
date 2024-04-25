<template>
    <div class="logo">
        <img :src="MenuLogo"/>
        <span v-if="show" class="logo-title">{{ title }}</span>
    </div>
</template>

<script setup lang="ts">
import MenuLogo from '@/assets/MenuLogo.png'
import { watch, ref } from 'vue';
import { collapseStore } from '@/store/collapse/index'
const store = collapseStore()
const title =ref('旧物新生港后台管理系统')
// const show =computed(()=>{
//     return store.getCollapse
// })
const show = ref(true)
watch(
    ()=>store.getCollapse,
    (collapsed:boolean)=>{
        if(!collapsed){
            setTimeout(() => {
                show.value = !collapsed;
            }, 300);
        }else{
            show.value = !collapsed;
        }
    }
)
</script>

<style scoped lang="scss">

.logo{
    display: flex;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #2b2f3a;
    cursor: pointer;
    align-items: center;
    img{
        width: 40px;
        height: 40px;
        margin-left: 3px;
    }
    .logo-title{
        color: #fff;
        font-weight: 600;
        font-size: 17px;
        font-family: FangSong;
    }
}
</style>