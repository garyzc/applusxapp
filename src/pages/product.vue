<template>
  <AxLayout class="page-product">
    <AxLayoutPage>
      <AxNavbar :style="{backgroundColor: '#ff4b32'}" :inverse="true">
        <AxIcon slot="left" type="icon-back_light" @click.native="goBack" />
        
        <div>
          商品 详情 评价
        </div>
        


        <AxIcon slot="right" type="icon-message_light"  />
      </AxNavbar>

      <div ref="pro1">
        <AxSwiper :loop="true" class="page-product-img-swiper">
          <AxSwiperItem v-for="(item,index) in swiperItems" :bgimg="item.img" :key="index"></AxSwiperItem>
        </AxSwiper>

        <productPrice></productPrice>
        <productName></productName>
        
      </div>

      


      <div ref="pro3" style="height:300px;background: #ccc;">
        <h4>详情</h4>
      </div>


      <div class="comment" >
        <div class="comment-header">
          <h4>评价</h4>
          <span>好评97%</span>
        </div>
        <div class="comment-body">
          <div class="comment-tags">

          </div>
          <div class="comment-list">
            <div class="comment-list-item" v-for="(item,index) in comments" :key="index">
              <div class="comment-list-item-header">
                <span>{{item.name}}</span>
                <span>{{item.starts}}</span>
                <span>{{item.date}}</span>
              </div>
              <div class="comment-list-item-body">
                {{item.content}}
              </div>
              <div class="comment-list-item-images">
                <span v-for="(img,index) in item.images" :key="index"><img :src="img.url" /></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </AxLayoutPage>

    <div slot="bottom">
      <div class="product-actions">
        <AxButton>购物车</AxButton>
        <AxButton>加入购物车</AxButton>
        <AxButton>立即购买</AxButton>
      </div>
    </div>

  </AxLayout>
</template>

<script>
  // import {slideMix} from 'mixins/transition'
  import AxNavbar from 'axui/components/ax-navbar'
  import AxInput from 'axui/components/ax-input'
  import AxButton from 'axui/components/ax-button'
  import AxTabs from 'axui/components/ax-tabs'
  import AxSwiper from 'axui/components/ax-swiper'
  import AxLayout from 'axui/components/ax-layout'
  import AxLayoutPage from 'axui/components/ax-layout/AxLayoutPage'

  import productName from './product/productName'
  import productPrice from './product/productPrice'

  export default {
    // mixins: [slideMix],
    components: {
      AxNavbar,
      AxInput,
      AxButton,
      AxTabs,
      AxTabsPane:AxTabs.AxTabsPane,
      AxSwiper,
      AxSwiperItem: AxSwiper.AxSwiperItem,
      AxLayout,
      AxLayoutPage,
      productName,
      productPrice,

    },
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: '',
        navRight: 'search',
        listShowType: 'icon-list',
        swiperItems: [
          {img: '/static/product1.webp'},
          {img: '/static/product2.dpg'},
        ],
        comments: [
          {
            username: '小***4',
            date:'2017-11-16',
            starts:5,
            content:'11月12号凌晨下的单，偶不是plus，不能领减两百的券，用了满1000减30元的东券，一共12三一八哦，错开双十一促销期收货，今天收到，外包装和机子都很完美，一点划痕都没有，电池0循环，官网查了序列号，保修一年，保修时间应该是跟你输入的实际购买日期往后推一年，也就是按照你的购买日期为出厂日期，除了电话支持过期其他都很好。还有那个交流三脚插头是接在充电器上的，只要把充电器上的两脚插头拔下再把三脚插头一头插上去就可以了哦，看我的照片哦',
            images: [
              {url:'//img30.360buyimg.com/shaidan/s128x96_jfs/t7969/338/4542413375/79789/f8f14323/5a0da172N619b6fe2.jpg!cc_100x100.dpg'},
              {url:'//img30.360buyimg.com/shaidan/s128x96_jfs/t7969/338/4542413375/79789/f8f14323/5a0da172N619b6fe2.jpg!cc_100x100.dpg'},
              {url:'//img30.360buyimg.com/shaidan/s128x96_jfs/t7969/338/4542413375/79789/f8f14323/5a0da172N619b6fe2.jpg!cc_100x100.dpg'},
              {url:'//img30.360buyimg.com/shaidan/s128x96_jfs/t7969/338/4542413375/79789/f8f14323/5a0da172N619b6fe2.jpg!cc_100x100.dpg'},
              {url:'//img30.360buyimg.com/shaidan/s128x96_jfs/t7969/338/4542413375/79789/f8f14323/5a0da172N619b6fe2.jpg!cc_100x100.dpg'},
            ]
          }
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
      //搜索点击
      handleSearch () {
        this.navRight = 'listshowtype'
      },
      //列表显示状态
      handleListShowType () {
        this.listShowType = this.listShowType == 'icon-list' ? 'icon-cascades': 'icon-list'
      }
    }

  }
</script>

<style lang="scss" >
  .page-product-img-swiper {
    height: 750px;
  }
  .product-actions {
    height: 50px;
  }
</style>
