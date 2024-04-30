import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
router.beforeEach((to:any, _from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = '易绘电商工具'
    }
    next()
})
const app = createApp(App)
app.use(router)
app.mount('#app')