import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import {auth} from '../firebase'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
  path: '/edit/:id',
  name: 'Edit',
  component: () => import('../views/Edit.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
  path: '/add',
  name: 'Add',
  component: () => import('../views/Add.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(record => record.meta.requiresAuth)) {
    const user = auth.currentUser
    console.log(user, "user from router")

    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
    

  } else {
    next()
  }
})

export default router
