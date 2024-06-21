import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import { projectAuth } from '../firebase/config'
import BookDetails from '../views/BookDetails.vue'
import ClubMenu from '../views/ClubMenu.vue'

//auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (!user) {
    next({ name: 'welcome' })
  } else {
  next()
  }
}

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: requireAuth
  },
  {
    path: '/bookclub/:id',
    name: 'booklclub',
    component: BookDetails,
  },
  {
    path: '/clubmenu',
    name: 'clubmenu',
    component: ClubMenu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
