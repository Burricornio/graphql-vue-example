// 1 -  Importing the required dependencies from the apollo-client package
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
//
import { ApolloLink } from 'apollo-link'
import 'tachyons'
import Vue from 'vue'

// Autenticación
import { GC_USER_ID, GC_AUTH_TOKEN } from './constants/settings'

// 2 - Importing the vue-apollo package
import VueApollo from 'vue-apollo'

import router from './router'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

// 3 - Create the httpLink,
const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://api.graph.cool/simple/v1/cjgkn5kk029e90186b5yzrdig'
})

// Se usa para la utenticación pasando el token a las peticiones
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem(GC_AUTH_TOKEN)
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  })

  return forward(operation)
})

// 4 -  Instantiate the ApolloClient by passing in the httpLink
const apolloClient = new ApolloClient({
  //
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// 5 - Install the plugin
Vue.use(VueApollo)

// 6 -  Create a new apollo client instance
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
})

// get the current GC_USER_ID from localStorage if there is one
let userId = localStorage.getItem(GC_USER_ID)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 7 - Specify the provide object on your root component
  provide: apolloProvider.provide(),
  router,
  data: {
    // set this userId on the $root $data object
    userId
  },
  render: h => h(App)
})
