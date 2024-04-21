// 这些都是模板i代码，不用看
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import VueRouter from 'vue-router'
//ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './page/main/MainPage.vue'

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About }
// ]

// const router = VueRouter()
//直接看App里面的代码
const app = createApp(App)

app.use(createPinia())
// app.use(VueRouter)
app.use(ElementPlus)

app.mount('#app')
