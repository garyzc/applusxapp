<template>
  <AxGridList showType="col">
    
    <template v-for="(item,index) in data" v-if="data.length>0">
      
      <AxGridListItem  :key="index"  :to="{name:'product'}" :direction="true"  >

        <AxFlex justify="between" :flex="false" >
          <div class="order-list-images">
            <template v-for="(orderitem, index) in item.orderitems" >
              <div :style="{'background-image': 'url('+orderitem['product']['image']+')'}" :key="index" class="order-list-image" ></div>
            </template>
          </div>
          共{{item.orderitems.length}}件商品，实付：<em>¥</em>{{item.total}}
        </AxFlex>
        
        
        <!-- <template slot="title">{{item.product.name}}</template> -->
      </AxGridListItem>
      <AxSpace size="lg" :key="'s'+index" :style="{width:'100%'}" />
    </template>

    <template v-if="data.length==0">
      <div class="empty-tip">
        <AxIcon type="icon-comment_light" />
        <div>您还没有相关订单</div>
      </div>
    </template>

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
    'AxSpace',
    'AxIcon',
    ])
  export default {
    nmae: 'OrderList',
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
  
  .order-list-images {
    height: 185px;
    display: flex;
    align-items: center;
    // background: #eee;
    margin: 0 -20px;
    padding: 0 20px;
    .order-list-image {
      width: 145px;
      height: 145px;
      background-color: #fff;
      border-radius: 5px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: contain;
      margin-right: 10px;
    }
    
  }

  .empty-tip {
    text-align: center;
    font-size: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .ax-icon {
      font-size: 100px;
    }
  }

</style>
