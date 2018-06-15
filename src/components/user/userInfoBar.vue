<template>
  <AxFlex :flex="false" bgc="#fd3734" :style="{padding:'20px'}">

      <AxFlex justify="between">
        <AxAvatar icon="icon-my_light" inverse @click.native="goToProfile">
          <div slot="right">
            garychen
          </div>
          <div slot="rightsub">
              151****142
          </div>
        </AxAvatar>
        <AxButton type="text" :style="{color:'#fff'}" @click.native="goToSetting">设置</AxButton>
      </AxFlex>

      <AxFlex justify="around" :class="['my-action-list']" >
        <AxText :text1="11" text2="收藏" ></AxText>
        <AxText :text1="11" text2="足迹" ></AxText>
        <AxText :text1="11" text2="卡券" ></AxText>
      </AxFlex>
      
  </AxFlex>
</template>

<script>
  import importWrap from 'util/importWrap'
  const components = importWrap(['AxLayout','AxHeader','AxCard','AxFlex','AxSpace','AxButton','AxGrid','AxAvatar','AxText'])
  export default {
    name:'userInfoBar',
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
      ...components
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
      goToSetting() {
        this.$router.push({'name':'setting'})
      },
      goToProfile() {
        this.$router.push({'name':'profile'})
      },
    }

  }
</script>

<style lang="scss" >
  
</style>
