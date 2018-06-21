<template>
  <AxGridList showType="col">
    <AxGridListItem v-for="(item,index) in data" :key="index" :data="item" :to="{name:'product'}"  >
      <AxCheckbox :checked="item.checked" @change="(checked)=>{ $store.dispatch('cart/updateCheck',{index,checked}) }" v-if="check"  slot="check" />
      <AxFlex slot="bottom" justify="between">
        <em>¥</em>{{item.price}}
        <AxInputnumber :value="item.ordernum" :min="1" @change="(value) => {$store.dispatch('cart/updateOrderItemNum',{index,value})}" />
      </AxFlex>
      <img :src="item.product.image" slot="img" />
      <template slot="title">{{item.product.name}}</template>
    </AxGridListItem>
  </AxGridList>
</template>

<script>
  import importWrap from 'util/importWrap'
  const components = importWrap([
    'AxFlex',
    'AxGridList',
    'AxGridListItem',
    'AxGridListItem',
    'AxCheckbox',
    'AxInputnumber',
    ])
  export default {
    nmae: 'CartList',
    props: {
      check: {
        default: true
      },
      data: {
        default: []
      }
    },
    components: {
      ...components
    },
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: ''
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

<style lang="scss" scoped>
  
</style>
