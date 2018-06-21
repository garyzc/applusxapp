<template>
  <AxLayout :class="['ax-ui-bg-gray']">
    <AxNavbar slot="top" :style="{color:'#333',textAlign:'center'}" >
      购物车
    </AxNavbar>

    <!-- <AxGridList showType="col">
        <AxGridListItem v-for="(item,index) in $store.state.cart.list" :key="index" :data="item" :to="{name:'product'}" check >
          <AxCheckbox :checked="item.checked" @change="(checked)=>{ $store.dispatch('cart/updateCheck',{index,checked}) }"  slot="check" />
          <AxFlex slot="bottom" justify="between">
            <em>¥</em>{{item.price}}
            <AxInputnumber :value="item.ordernum" :min="1" @change="(value) => {$store.dispatch('cart/updateOrderItemNum',{index,value})}" />
          </AxFlex>
          <img :src="item.product.image" slot="img" />
          <template slot="title">{{item.product.name}}</template>
        </AxGridListItem>
        
    </AxGridList> -->

    <CartList :data="$store.state.cart.list"></CartList>

    <div slot="bottom1" class="cart-bottom">
      <AxCheckbox :checked="$store.getters['cart/isCheckAll']" @change="(checked) => { $store.dispatch('cart/checkAll',checked) }">全选</AxCheckbox>
      <div v-if="$store.getters['cart/total']">
        合计¥{{$store.getters['cart/total']}}
      </div>
      <AxButton type="primary" @click.native="checkOut">结算({{$store.getters['cart/checkeds']}})</AxButton>
    </div>
    <div class="page-index-bottom" slot="bottom"></div>
  </AxLayout>
</template>

<script>
  import importWrap from 'util/importWrap'
  const components = importWrap([
    'AxLayout',
    'AxNavbar',
    'AxCard',
    'AxFlex',
    'AxSpace',
    'AxButton',
    'AxGrid',
    'AxAvatar',
    'AxGridList',
    'AxGridListItem',
    'AxGridListItem',
    'AxCheckbox',
    'AxInputnumber',
    ])
  import CartList from 'coms/cart/CartList.vue'
  export default {
    components: {
      ...components,
      CartList
    },
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: ''
      }
    },
    created() {
      this.fetchData()
    },
    mounted() {
      if (process.browser) {
        
      }
    },
    watch: {
      
    },
    computed: {      

    },
    methods: {
      fetchData () {
        this.$store.dispatch('cart/query', {})
      },

      checkOut () {
        if( this.$store.getters['cart/checkeds'] == 0 ) {
          this.$axtoast({
            text:'您还没有选择商品^_^'
          })
        } else {
          this.$router.push({name:'checkout'})
        }
        
      }
      
    }

  }
</script>

<style lang="scss">
  .cart-bottom {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 40px;
    height: $ax_layout_bottom1_height;
    box-sizing: border-box;
  }
</style>
