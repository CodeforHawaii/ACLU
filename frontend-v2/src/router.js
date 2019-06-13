import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Store from './store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter (to, from, next) {
        Store.commit('showSplash')
        next()
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/report-feedback',
      name: 'report-feedback',
      component: () => import(/* webpackChunkName: "report-feedback" */ './views/ReportFeedback.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },
    {
      path: '/accessibility',
      name: 'accessibility',
      component: () => import(/* webpackChunkName: "accessibilitySurvey" */ './views/AccessibilitySurvey.vue')
    },
    {
      path: '/intro',
      name: 'intro',
      component: () => import(/*  webpackChunkName: "intro" */ './views/Intro.vue')
    },
    {
      path: '/restriction-details',
      name: 'restriction-details',
      component: () => import(/* webpackChunkName: "about" */ './views/RestrictionDetails.vue')
    },
    {
      path: '/rights',
      name: 'rights',
      component: () => import(/* webpackChunkName: "rights" */ './views/Rights.vue')
    },
    {
      path: '/licenses',
      name: 'licenses',
      component: () => import(/* webpackChunkName: "license" */ './views/Licenses.vue')
    },
    {
      path: '*',
      name: '404',
      component: () => import(/* webpackChunkName: "about" */ './views/404.vue')
    }
  ]
})
