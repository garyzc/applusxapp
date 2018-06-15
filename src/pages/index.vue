<template>
  <AxLayout>

    <AxLayoutPage>
      <transition>
        <keep-alive>
          <router-view class="view-page"  ></router-view>
        </keep-alive>
      </transition>
    </AxLayoutPage>

    <AxTabBar slot="bottom">
        <AxTabBarPane title="首页" :to="{name:'home'}" icon="icon-home_light"></AxTabBarPane>
        <AxTabBarPane title="分类" :to="{name:'categorylist'}" icon="icon-cascades"></AxTabBarPane>
        <AxTabBarPane title="购物车" :to="{name:'cart'}" icon="icon-cart_light"></AxTabBarPane>
        <AxTabBarPane title="我的" :to="{name:'user'}" icon="icon-my_light"></AxTabBarPane>
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
