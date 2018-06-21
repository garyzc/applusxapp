<template>
    <AxLayout bgc="#f2f2f2">
      <template slot="top">
        <AxNavbar >
          <AxIcon slot="left" type="icon-back_light"   @click.native="goBack" />
          我的订单
        </AxNavbar>
        
      </template>
      <AxTabsBar :labels="orderLabels" slot="top1"  :value="tabIndex" @change="handleChange"></AxTabsBar>
      

      <AxSwiper :loop="false" @change="handleChange" :value="tabIndex" :fitParent="true">
        <AxSwiperItem :key=1>
          <AxPullToRefresh @refresh="()=>{ handleRefresh('all') }" :done="pullStateAll">
            <OrderList :data="$store.state.order.list"></OrderList>
          </AxPullToRefresh>
        </AxSwiperItem>
        <AxSwiperItem :key=2>
          <OrderList :data="$store.getters['order/pay']"></OrderList>
        </AxSwiperItem>
        <AxSwiperItem :key=3>
          <OrderList :data="$store.getters['order/collect']"></OrderList>
        </AxSwiperItem>
        <AxSwiperItem :key=4>
          <OrderList :data="$store.getters['order/complete']"></OrderList>
        </AxSwiperItem>
        <AxSwiperItem :key=5>
          <OrderList :data="$store.getters['order/cancel']"></OrderList>
        </AxSwiperItem>
      </AxSwiper>
      


    </AxLayout>
</template>

<script>
// import {slideMix} from 'mixins/transition'
import OrderList from 'coms/order/OrderList.vue'
import importWrap from "util/importWrap";
const components = importWrap([
  "AxLayout",
  "AxNavbar",
  "AxList",
  "AxListItem",
  "AxCard",
  "AxTabs",
  "AxTabsPane",
  "AxTabsBar",
  "AxSwiper",
  "AxSwiperItem",
  "AxPullToRefresh",


  "AxHeader",
  
  "AxFlex",
  "AxSpace",
  "AxButton",
  "AxGrid",
  "AxAvatar",
]);
export default {
  name: "order",
  asyncData({ params }) {
    return {
      
    };
  },
  data() {
    return {
      pullStateAll: false,
      tabIndex: 0,
      orderLabels: [
        {label: '全部'},
        {label: '待付款'},
        {label: '待收货'},
        {label: '已完成'},
        {label: '取消'},
      ]
    }
  },
  // mixins: [slideMix],
  components: {
    ...components,
    OrderList,
  },
  created() {
    this.fetchData()
  },
  mounted() {
    if (process.browser) {
    }
  },
  computed: {

  },
  methods: {
    fetchData () {
      this.$store.dispatch('order/query', {})
    },
    handleChange(index) {
      this.tabIndex = index
    },
    handleRefresh(which) {
      console.log('process')
      setTimeout(()=>{
        this.pullStateAll = true
        setTimeout(()=>{
          this.pullStateAll = false
        },1000)
      },1000)
    }
  }
};
</script>

<style lang="scss" >
  .checkout-wrap {
    padding: 20px;
  }
</style>
