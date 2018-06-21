<template>
    <div>
      orderlist
    </div>
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

  "AxHeader",
  
  "AxFlex",
  "AxSpace",
  "AxButton",
  "AxGrid",
  "AxAvatar",
]);
export default {
  name: "OrderList",
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
</style>
