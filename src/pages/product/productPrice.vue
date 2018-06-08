<template>
  <div class="product-price">
    <span class="price large_size" id="priceSale">¥<em>4999</em>.00</span>
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
  .product-price {
    padding: 20px;
    .price {
      font-size: 25px;
      color: #f13069;
      font-weight: bold;
      em {
        font-size: 40px;
        font-style: normal;
      }
    }
  }
</style>
