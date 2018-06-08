<template>
  <AxLayout>

    <AxLayoutPage>
      <keep-alive>
        <router-view class="view-page" :key="$route.fullPath" />
      </keep-alive>
    </AxLayoutPage>

    <AxTabBar slot="bottom">
        <AxTabBarPane title="首页" :to="{path:'/'}"></AxTabBarPane>
        <AxTabBarPane title="分类" :to="{name:'categorylist'}"></AxTabBarPane>
        <AxTabBarPane title="购物车" :to="{path:'cart'}"></AxTabBarPane>
        <AxTabBarPane title="我的" :to="{path:'my'}"></AxTabBarPane>
    </AxTabBar>
    
  </AxLayout>
</template>

<script>
let cachedTransition = 'slide-right'
  import {slideMix} from 'mixins/transition'
  // import {AxLayout,AxTabs} from 'axui'
  import AxLayout from 'axui/components/ax-layout'
  import AxTabBar from 'axui/components/ax-tab-bar'
  // import AxLayoutPage from 'axui/components/ax-layout/AxLayoutPage'
  export default {
    name: 'index',
    // mixins: [slideMix],
    components: {
      AxLayout,
      AxLayoutPage: AxLayout.AxLayoutPage,
      AxTabBar,
      AxTabBarPane: AxTabBar.AxTabBarPane
    },
    async fetch  (context) {

    },

    data() {
      return {
        stateHistory: [],
        transitionName: cachedTransition
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        
      }
    },
    watch: {
      '$route' (to, from) {
        
      }
    },
    computed: {
      
    },
    methods: {
    }

  }
</script>

<style >
.title
{
  margin: 50px 0;
}

</style>
