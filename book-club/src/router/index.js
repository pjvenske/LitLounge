import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Home from '../views/Home.vue'
import { projectAuth } from '../firebase/config'
import ClubDetails from '../views/ClubDetails.vue'
import ClubMenu from '../views/ClubMenu.vue'
import Search from '../views/Search.vue'
import BookDetails from '../views/BookDetails.vue'

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
    component: ClubDetails,
    beforeEnter: requireAuth,
  },
  {
    path: '/clubmenu',
    name: 'clubmenu',
    component: ClubMenu,
    beforeEnter: requireAuth,
  },
  {
    path:'/search',
    name: 'search',
    component: Search,
    beforeEnter: requireAuth,

  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookDetails,
    beforeEnter: requireAuth,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
