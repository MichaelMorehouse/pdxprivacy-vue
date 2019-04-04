import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import About from './components/pages/About'
import Efforts from './components/pages/Efforts'

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: About },
  { path: '/efforts', component: Efforts }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
