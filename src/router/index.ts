import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path:'',
        name:'index',
        component:()=>import("../views/index.vue")
    },
    {
        path:encodeURI('/卡西奴网批'),
        name:'kxnwp',
        component:()=>import("../views/kxnwp.vue"),
        meta:{
            title:'易绘-卡西奴网批'
        }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router