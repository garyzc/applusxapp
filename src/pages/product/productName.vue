<template>
  <div class="product-name">
    <h1>Apple MacBook Air 13.3英寸笔记本电脑 银色(2017款Core i5 处理器/8GB内存/128GB闪存 MQD32CH/A)</h1>
    <div class="product-name-fav"><AxIcon type="icon-favor_light" /><span>关注</span></div>
  </div>
</template>

<script>
  import AxIcon from 'axui/components/ax-icon'
  export default {
    // mixins: [slideMix],
    components: {
     AxIcon,
    },
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: '',
        navRight: 'search',
        listShowType: 'icon-list',
        swiperItems: [
          {img: '/product1.webp'},
          {img: '/product2.dpg'},
        ],
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
  .product-name {
    padding: 20px;
    display: flex;
    align-items: flex-start;
    h1 {
      font-size: 28px;
      font-weight: bold;
      line-height: 38px;
      margin: 0;
    }
    .product-name-fav {
      width: 140px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 24px;
      .ax-icon {
        font-size: 40px;
      }
      span {
        color: #5e5e5e;
      }
    }
  }
</style>
