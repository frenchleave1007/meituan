// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 注册一个全局自定义指令 `v-focus`
Vue.directive('document-click', {
  bind (el, binding, vnode) {
    // console.log('bind' + el, binding, vnode)
    document.addEventListener('click', binding.value, false)
  },
  inserted () {
    // console.log('inserted')
  },
  update () {
    // console.log('update')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
