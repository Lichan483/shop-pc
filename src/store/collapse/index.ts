import { defineStore } from "pinia";
//创建store
//defineStore第一个参数：唯一的，不能重复 
export const collapseStore = defineStore('collapseStore',{
    state:()=>{
        return{
            collapse:false
        }
    },
    //获取值
    getters:{
        getCollapse(state){
            return state.collapse
        }
    }, 
    //改变state的值
    actions:{
        setCollapse(collapse:boolean){
            this.collapse = collapse;
        }
    }
})