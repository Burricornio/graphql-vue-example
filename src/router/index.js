import Vue from 'vue'
import Router from 'vue-router'

// 1- import the CreateLink and LinkList components
import LinkList from '../components/LinkList'
import CreateLink from '../components/CreateLink'
import AppLogin from '../components/AppLogin'
import Search from '../components/Search'

Vue.use(Router)

export default new Router({
  // 2 - map each route to the component that should be rendered
  routes: [
    {
      path: '/',
      component: LinkList
    },
    {
      path: '/create',
      component: CreateLink
    },
    {
      path: '/login',
      component: AppLogin
    },
    {
      path: '/search',
      component: Search
    }
  ],
  // 3 - remove the hash from the URLs
  mode: 'history'
})
