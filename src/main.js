import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import About from './components/pages/About'
import Efforts from './components/pages/Efforts'
import Resources from './components/pages/Resources'
import Allies from './components/pages/Allies'

Vue.use(VueRouter)

library.add(faEnvelope, faTwitter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const routes = [
  { path: '/', component: About },
  { path: '/efforts', component: Efforts },
  { path: '/resources', component: Resources },
  { path: '/allies', component: Allies },
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  // short for `routes: routes`
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
