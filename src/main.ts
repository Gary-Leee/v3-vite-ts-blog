import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import { ElRow, ElCol } from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
import './assets/css/style.scss'
import App from './App.vue'
import { router } from './router'
const app = createApp(App)
app.use(router);
// app.component(ElRow.name, ElRow);
// app.component(ElCol.name, ElCol);
app.mount('#app')
