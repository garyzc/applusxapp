<template>
  <div class="page-index">
    <AxHeader fixed="true" v-on:searchClick="$router.push({path:'/search'})"></AxHeader>

    <AxSwiper :loop="true" class="banner">
      <AxSwiperItem v-for="(item,index) in swiperItems" :bgimg="item.img" :key="index"></AxSwiperItem>
    </AxSwiper>
    <AxFlex pt="big" pb="big">
      <AxSwiper :loop="false">
        <AxSwiperItem :key="1">
          <AxGrid :data="categoryGridList"></AxGrid>
        </AxSwiperItem>
      </AxSwiper>
    </AxFlex>

    
    <AxGridList title="猜你喜欢">
      <AxGridListItem v-for="(item,index) in FavGridList" :index="index" :key="index" :data="item" ></AxGridListItem>
    </AxGridList>
    <router-link :to="{path:'login'}">登录</router-link>
    index
  </div>
</template>

<script>
  import axios from 'axios'
  // import {
  //   AxHeader,
  //   AxTabs,
  //   AxGridList,
  //   AxSwiper,
  // } from 'axui'

  import AxHeader from 'axui/components/ax-header'
  import AxGridList from 'axui/components/ax-grid-list'
  import AxSwiper from 'axui/components/ax-swiper'
  import AxGrid from 'axui/components/ax-grid'
  import AxFlex from 'axui/components/ax-flex'
  import AxSpace from 'axui/components/ax-space'


  export default {
    name: 'home',
    components: {
      AxHeader,
      AxGridList,
      AxGridListItem: AxGridList.AxGridListItem,
      AxSwiper,
      AxSwiperItem: AxSwiper.AxSwiperItem,
      AxGrid,
      AxFlex,
      AxSpace
    },
    data () {
      return {
        te:'1',
        swiperItems: [
          {img: '/static/swiper1.jpg'},
          {img: '/static/swiper2.webp.jpg'},
          {img: '/static/swiper3.webp.jpg'},
        ],
        categoryGridList: [
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
          {icon:'/static/indexcategory.png',text:'kkk'},
        ],
        FavGridList: [
          {img:'/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',text:'联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)'},
          {img:'/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',text:'联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)'},
          {img:'/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',text:'联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)'},
          {img:'/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',text:'联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)'},
          {img:'/static/mock/images/5a6947e5N39e16ed8.jpg!q70.jpg',text:'联想(Lenovo)拯救者R720 15.6英寸大屏游戏笔记本电脑(i5-7300HQ 8G 1T+128G SSD GTX1050Ti 4G IPS 黑金)'},
        ],
      }
    },
    // asyncData ({ params }) {
    //   // return axios.get(`http://192.168.1.109:3000/test/`)
    //   // .then((res) => {
    //   //   console.log(res.data.name)
    //   //   return { title: res.data.name }
    //   // })
    //   return {
    //     te:'1',
    //     swiperItems: [
    //       {img: '/swiper1.jpg'},
    //       {img: '/swiper2.webp.jpg'},
    //       {img: '/swiper3.webp.jpg'},
    //     ]
    //   }
    // },
    // async fetch  (context) {

    // },

    created() {
      console.log('index created')
    },
    mounted() {
      if (process.browser) {
        
      }
      console.log('index mounted')
    },
    computed: {
      
    },
    methods: {
    }

  }
</script>

<style  lang="scss" >
  .page-index {
    height: 100%;
    .banner {
      height: 340px;
    }
  }
  
</style>
