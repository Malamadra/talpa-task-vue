import Vue from 'vue'
import VueRouter from 'vue-router'
import MainRoute from '../components/routes/MainRoute'
import SingleMachineRoute from '../components/routes/SingleMachineRoute'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainRoute
  },
  {
    path: '/single-machine/:id',
    name: 'about',
    component: SingleMachineRoute,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
