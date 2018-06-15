<template>
  <AxLayout :class="['ax-ui-bg-gray']">
    <AxNavbar slot="top" :style="{color:'#333',textAlign:'center'}" >
      购物车
    </AxNavbar>

    <AxGridList showType="col">
        <AxGridListItem v-for="(item,index) in $store.state.cart.list" :key="index" :data="item" :to="{name:'product'}" check >
          <AxCheckbox :checked="item.checked" @change="(checked)=>{ updateOrderItemChecked(index,checked) }"  slot="check" />
            <AxFlex slot="bottom" justify="between">
              <em>¥</em>{{item.price}}
              <AxInputnumber :value="item.ordernum" :min="1" @change="(value) => {updateOrderItemNum(index,value)}" />
            </AxFlex>
        </AxGridListItem>
    </AxGridList>

    <div slot="bottom2" class="cart-bottom">
      <AxCheckbox :checked="listIsCheckedAll" @change="updateCheckAll">全选</AxCheckbox>
      <div v-if="cartTotal">
        合计¥{{cartTotal}}
      </div>
      <AxButton type="primary">结算({{listCheckedNumbers}})</AxButton>
    </div>
  </AxLayout>
</template>

<script>
  import { mapMultiRowFields    } from 'vuex-map-fields';

  const mapMulFileds = (that) => {
    console.log(that)
  }

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
  export default {
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
      this.fetchData()
    },
    mounted() {
      if (process.browser) {
        
      }
    },
    watch: {
      '$store.state.cart.list': {
        handler(newValue, oldValue) {
          console.log(this.$store)
          // this.$store.commit('cart/setList',{data:newValue})
        },
        deep:true
      }
    },
    computed: {
      listIsCheckedAll: function() {
        return this.listCheckedNumbers == this.$store.state.cart.list.length
      },
      listCheckedNumbers: function() {
        let checkeList = this.$store.state.cart.list.filter((item)=>{
          return item.checked == true
        })
        return checkeList?checkeList.length:0
      },
      cartTotal: function() {
        return this.$store.state.cart.list.reduce((value,item)=>{
          if(item.checked) {
            return item.price*item.ordernum + value
          } else {
            return value
          }
        },0)
      }
      
    },
    methods: {
      fetchData () {
        this.$store.dispatch('cart/query', {})
      },
      updateCheckAll (checked) {
        this.$store.commit('cart/updateCheckAll', checked)
      },
      updateOrderItemChecked(index,checked) {
        this.$store.commit('cart/updateOrderItemChecked', {
          index,
          checked
        })
      },
      updateOrderItemNum(index,value) {
        this.$store.commit('cart/updateOrderItemChecked', {
          index,
          checked:true
        })

        this.$store.commit('cart/updateOrderItemNum',{
          index,
          value
        })
      }
    }

  }
</script>

<style lang="scss">
  .cart-bottom {
    background-color: #fff;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 0 40px;
    box-sizing: border-box;
  }
</style>
