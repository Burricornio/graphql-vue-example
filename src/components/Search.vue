<template>
  <div>
    <div>
      Search
      <!-- 1- Bind searchText to an input element -->
      <input type="text" v-model="searchText">
    </div>
    <link-item
      v-for="(link, index) in allLinks"
      :key="link.id"
      :link="link"
      :index="index">
    </link-item>
  </div>
</template>

<script>
/* eslint-disable */
// 2- Import ALL_LINKS_SEARCH_QUERY
import { ALL_LINKS_SEARCH_QUERY } from '../constants/graphql'
import LinkItem from './LinkItem'

export default {
  name: 'Search',
  data () {
    return {
      allLinks: [],
      searchText: ''
    }
  },
  // 3- Define a smart query. Note that variables is a function rather than an object
  apollo: {
      allLinks: {
      query: ALL_LINKS_SEARCH_QUERY,
      variables () {
        return {
          searchText: this.searchText
        }
      },
      skip () {
        return !this.searchText
        }
      }
    },
    components: {
        LinkItem
    }
}
</script>