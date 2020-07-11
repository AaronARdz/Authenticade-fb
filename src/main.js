import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import {auth} from './firebase'

auth.onAuthStateChanged(user => {
  if(user) {
    const userDetected = {
      email: user.email,
      uid: user.uid
    }
    store.dispatch('detectUser', userDetected)
  } else {
    console.log(user)
    store.dispatch('detectUser', user)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
