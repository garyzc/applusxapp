<template>
  <div class="ax-list-item" :class="{'ax-list-item-clear':(index+1)%$parent.columns==0,'ax-list-item-withcheck':$slots.check != null}" :style="cstyle">
    <div class="ax-list-item-check" v-if="$slots.check != null">
      <slot name="check"></slot>
    </div>
    
      <div class="ax-list-item-img">
        <router-link tag="a" :to="to">
        <img :src="data.img" />
        </router-link>
      </div>
      <div class="ax-list-item-text">
        <div class="ax-list-item-title">
          <router-link tag="a" :to="to">
          {{data.text}}
          </router-link>
        </div>
        <slot name="bottom"></slot>
      </div>
    <slot></slot>
    
  </div>
</template>
<script>
  import AxCheckbox from '../ax-checkbox/'
  export default {
    name: 'AxGridListItem',
    async fetch  (context) {

    },
    components: {
      AxCheckbox,
    },
    props: {
      check: {
        default: null
      },
      index: {
        default: () => {
          return 0
        }
      },
      data: {
        default: () => {
          return {}
        }
      },
      to: {
        default: () => {
          return {}
        }
      },
      checkBoxOnChange: {
        default: (value) => {
          
        }
      },
    },

    data() {
      return {
        plusErrorWebview: ''
      }
    },
    created() {
      // console.log(this.$parent)
    },
    mounted() {
      if (process.browser) {
        
      }
    },
    computed: {
      cstyle: function() {
        let col_space = (20)*0.1333333+'vw'
        let space = (((750-(750/this.$parent.columns-20)*this.$parent.columns)/(this.$parent.columns*1+1)))*0.1333333+'vw'
        return {
          width:this.$parent.showType == 'grid' ? (750/this.$parent.columns-20)*0.1333333+'vw' : (750-20*2)*0.1333333+'vw',
          marginLeft: this.$parent.showType == 'grid'? space: col_space,
          marginBottom: this.$parent.showType == 'grid'? space: col_space,
          marginRight: this.$parent.showType == 'grid'? 0 : col_space
        }
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-list-item {
    background-color: $ui_color_white;
    box-sizing: border-box;
    .ax-list-item-check {
      height: 100%;
      display: inline-flex;
      // justify-content: center;
      align-items: center;
    }
    .ax-list-item-text {
      font-size: 26px;
      line-height: 32px;
      color: #3d3d3d;
    }
    .ax-list-item-text {
      
      .ax-list-item-title {
        display: -webkit-box;  
        display: -moz-box;  
        overflow: hidden;  
        text-overflow: ellipsis;  
        word-break: break-all;  
        -webkit-box-orient: vertical;  
        -webkit-line-clamp:2;  
        height: 64px;
        a {
          color: $FontTitle;
        }
      }
    }
    .ax-list-item-img {
      background-color: $skeleton_color_bg;
      display: block;
      img {

      }
    }
  }


  .ax-grid-list-grid {
    .ax-list-item {
      
      // display: inline-flex;
      // width: 373px;
      // height:543px;
      background-color: $ui_color_white;
      margin-bottom: 4px;
      padding: 0px;
      box-sizing: border-box;
      margin-bottom: 20px;
      // margin-left: 5%;
      .ax-list-item-text {
        font-size: 26px;
        line-height: 32px;
      }
      .ax-list-item-text {
        height: 64px;
        // padding: 10px;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 0 10px;
        display: -webkit-box;  
        display: -moz-box;  
        overflow: hidden;  
        text-overflow: ellipsis;  
        word-break: break-all;  
        -webkit-box-orient: vertical;  
        -webkit-line-clamp:2;  
        box-sizing: border-box;
      }
      .ax-list-item-img {
        // width: 372.5px;
        // height: 372.5px;
        background-color: $skeleton_color_bg;
        display: block;
        img {
          max-width: 100%;
          width: 100%;
          display: block;
        }
      }
    }
  }
  
  .ax-list-title {
    
  }
  

  
  .ax-grid-list-col {
    .ax-list-item {
      // width: 100%;
      height: 335px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      
      .ax-list-item-text {
        width: calc(750px - 255px - 80px);
        // display: inline-block;
      }
      .ax-list-item-img {
        // display: inline-block;
        width: 255px;
        height: 255px;
        background-color: $skeleton_color_bg;
        img {
          width: 100%;
        }
      }
    }
    .ax-list-item-withcheck {
      .ax-list-item-text {
        width: calc(750px - 255px - 80px - 60px);
      }
    }
  }
  .ax-list-item-clear {
    margin-right:0!important;
  }
</style>
