<template>
  <div class="category-list">

    <AxSwiper :loop="true" class="category-list-banner">
      <AxSwiperItem v-for="(item,index) in banners" :bgimg="item.img" :key="index"></AxSwiperItem>
    </AxSwiper>
    
    <div class="category-list-item" v-for="(item,index) in items" :key="index">
      <h3>{{item.title}}</h3>
      <AxGrid :data="item.list" colnums="3"></AxGrid>
    </div>

  </div>
</template>

<script>
  import AxHeader from 'axui/components/ax-header'
  import AxSwiper from 'axui/components/ax-swiper'
  import AxGrid from 'axui/components/ax-grid'
  export default {
    props: {
      banners: {
        default: () => {
          return [
            {img: '/swiper1.jpg'},
            {img: '/swiper2.webp.jpg'},
            {img: '/swiper3.webp.jpg'},
          ]
        }
      },
      items: {
        default: () => {
          return [
            {
              title: '专场推荐', 
              list: [
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
              ]
            },
            {
              title: '专场推荐', 
              list: [
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
                {text: '电风扇',icon: '/static/category-list-item-img.png'},
              ]
            },
          ]
        }
      },
    },
    components: {
      AxHeader,
      AxSwiper,
      AxSwiperItem: AxSwiper.AxSwiperItem,
      AxGrid,
    },
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: '',
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

<style lang="scss" >
  .category-list {
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    .category-list-banner {
      height: 178px;
    }
    .category-list-item {
      margin-top: 45px;
      h3 {
        font-size: 26px;
        font-weight: bold;
        color: #333;
        margin-bottom: 35px;
      }
    }
  }
</style>
