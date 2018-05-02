<template>
  <div>
    <!--1- vifto display a loading indicator-->
    <h4 v-if="loading">Loading...</h4>
    <link-item
      v-for="(link, index) in allLinks"
      :key="link.id"
      :link="link"
      :index="index">
    </link-item>
  </div>
</template>

<script>
import LinkItem from './LinkItem'
// 2-Import theALL_LINKS_QUERY
import {ALL_LINKS_QUERY} from '../constants/graphql'

export default {
  name: 'LinkList',
  data () {
    return {
      // 3 - Initialize the all Linksdataproperty to an empty array and loading to 0
      allLinks: [],
      loading: 0
    }
  },
  components: {
    LinkItem
  },
  // 4 -add an apollo object
  apollo: {
    allLinks: {
      query: ALL_LINKS_QUERY
    }
  }
}
</script>
