<template>
  <AxLayout bgc="#f2f2f2">

    <userInfoBar>

    </userInfoBar>
    
    

    <AxFlex pl="big" pr="big" :style="{marginTop: '-20px'}">
      <AxCard radius="small" :style="{flex:1}">
        adsf
      </AxCard>
    </AxFlex>

    <AxSpace size="lg" />

    <AxFlex pl="big" pr="big">
      <AxCard radius="small">
        <div slot="hl">我的订单</div>
        <AxButton type="text" slot="hr">
          <router-link :to="{name:'order'}">查看更多订单<AxIcon type="icon-right" /></router-link>
        </AxButton>

        <AxGrid :data="GridList" colnums="5" />

      </AxCard>
    </AxFlex>
  </AxLayout>
</template>

<script>
  // import AxLayout from 'axui/components/ax-layout'
  // import AxHeader from 'axui/components/ax-header'
  // import AxGridList from 'axui/components/ax-grid-list'
  // import AxSwiper from 'axui/components/ax-swiper'
  // import AxGrid from 'axui/components/ax-grid'
  // import AxFlex from 'axui/components/ax-flex'
  import userInfoBar from 'coms/user/userInfoBar'
  import importWrap from 'util/importWrap'
  const components = importWrap(['AxLayout','AxHeader','AxCard','AxFlex','AxSpace','AxButton','AxGrid','AxAvatar','AxText'])
  export default {
    components: {
      // AxLayout
      ...components,
      userInfoBar
    },
    async fetch  (context) {

    },

    data() {
      return {
        GridList: [
          {icon:'/static/indexcategory.png',text:'待付款'},
          {icon:'/static/indexcategory.png',text:'待发货'},
          {icon:'/static/indexcategory.png',text:'待收货'},
          {icon:'/static/indexcategory.png',text:'待评价'},
          {icon:'/static/indexcategory.png',text:'退款/售后'},
        ]
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        
      }
    },
    computed: {
      
    },
    methods: {
    }

  }
</script>

<style lang="scss">
  .my-action-list {
    color: #fff;
    padding: 20px 0;
  }
</style>
