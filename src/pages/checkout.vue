<template>
    <AxLayout bgc="#f2f2f2">
      <AxNavbar slot="top">
        <AxIcon slot="left" type="icon-back_light"   @click.native="goBack" />
        填写订单
      </AxNavbar>

      <div class="checkout-wrap">
        <AxList>

          <AxListItem arrow>
            朱晨 151****1653<br />
            江苏无锡市新区高新技术产业开发区 无锡市新区无锡国家软件园双子座B座8楼
          </AxListItem>

          <AxSpace size="lg" />

          <AxListItem arrow>
            支付方式
            <template slot="extra">
              在线支付
            </template>
          </AxListItem>





        </AxList>

        <CartList :check="false" :data="$store.getters['cart/checkOutList']"></CartList>


        

      </div>


      <AxFlex slot="bottom" justify="between" align="center" :style="{backgroundColor: '#fff'}" class="checkout-bottom">
        <div v-if="$store.getters['cart/total']">
          ¥{{$store.getters['cart/total']}}
        </div>
        <AxButton type="primary" @click.native="checkOut">提交订单</AxButton>
      </AxFlex>

    </AxLayout>
</template>

<script>
// import {slideMix} from 'mixins/transition'
import CartList from 'coms/cart/CartList.vue'
import importWrap from "util/importWrap";
const components = importWrap([
  "AxLayout",
  "AxNavbar",
  "AxList",
  "AxListItem",
  "AxCard",

  "AxFlex",
  "AxSpace",
  "AxButton",
]);
export default {
  name: "checkout",
  asyncData({ params }) {
    return {
      plusErrorWebview: ""
    };
  },
  // mixins: [slideMix],
  components: {
    ...components,
    CartList,
  },
  created() {},
  mounted() {
    if (process.browser) {
    }
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" >
  .checkout-wrap {
    padding: 20px;
  }
  .checkout-bottom {
    padding: 0 20px 0 40px;
    height: $ax_layout_bottom_height!important;
  }
</style>
