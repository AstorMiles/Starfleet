import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Signed from '../views/Signed.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/signed',
    name: 'signed',
    component: Signed,
    meta:{requiresAuth:true,},
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to,from, next)=>{
//   if (to.matched.some((record)=> record.meta.requiresAuth)){
//     if(getAuth().currentUser){
//       next();
//     }

//   }else{
//     next()
//   }

// })

export default router;
