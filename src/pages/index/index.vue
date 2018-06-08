<template>
  <div class="page-index">
    <AxHeader fixed="true" v-on:searchClick="$router.push({path:'/search'})"></AxHeader>

    <AxSwiper :loop="true" class="banner">
      <AxSwiperItem v-for="(item,index) in swiperItems" :bgimg="item.img" :key="index"></AxSwiperItem>
    </AxSwiper>

    <AxSwiper :loop="false" >
      <AxSwiperItem :key="1">
        <AxGrid :data="categoryGridList"></AxGrid>
      </AxSwiperItem>
    </AxSwiper>

    
    <AxGridList>
      <AxGridListItem></AxGridListItem>
      <AxGridListItem></AxGridListItem>
      <AxGridListItem></AxGridListItem>
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


  export default {
    name: 'index1',
    components: {
      AxHeader,
      AxGridList,
      AxGridListItem: AxGridList.AxGridListItem,
      AxSwiper,
      AxSwiperItem: AxSwiper.AxSwiperItem,
      AxGrid
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
        ]
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
