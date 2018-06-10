<template>
  <div class="ax-header " :class="{'ax-header-fixed': fixed,'ax-header-inverse':inverse}">
    <div class="ax-header-left">
      <slot name="left"></slot>
      <!-- <div class="ax-header-btn-icon"></div>
      <div class="ax-header-btn-text">扫啊扫</div> -->
    </div>
    <div class="ax-header-mid" v-on:click.stop.prevent="handlerSearchCLick">
      <div class="ax-header-search" type="text" placeholder="搜索内容"  ></div>
    </div>
    <div class="ax-header-right">
      <slot name="right"></slot>
      <!-- <div class="ax-header-btn-icon"></div>
      <div class="ax-header-btn-text">消息</div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxHeader',
    props: {
      fixed: {
        default:() => {
          return false
        }
      },
      inverse: {
        default:() => {
          return false
        }
      }
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
      window.addEventListener('scroll', () => {
          if(this.getScrollTop() > 10) {
          this.$el.classList.add('ax-header-with-bg')
          } else {
          this.$el.classList.remove('ax-header-with-bg')
          }
      })
    },
    computed: {
      
    },
    methods: {
      getScrollTop() {
        var scrollTop=0;  
        if(document.documentElement&&document.documentElement.scrollTop){  
            scrollTop=document.documentElement.scrollTop;  
        }else if(document.body){  
            scrollTop=document.body.scrollTop;  
        }  
        return scrollTop;  
      },
      handlerSearchCLick() {
        this.$emit('searchClick')
      }
    }

  }
</script>

<style lang="scss" >
  .ax-header {
    // background: $skeleton_color_bg;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    box-sizing: border-box;
  }
  .ax-header-fixed {
    position: fixed;
    top:0;
    z-index: 100;
    transition: all 0.3s;
  }
  .ax-header-left {
    // flex: 1;
  }
  .ax-header-mid {
    width: 580px;
  }
  .ax-header-search {
    height: 60px;
    width: 100%;
    border-radius: 30px;
    -webkit-appearance: none;
    border: none;
    padding-left: 77px;
    box-sizing: border-box;
    font-size: 20px;
    color: $ui_color_gray;
    background-color: #fff;
  }
  
  .ax-header-left,.ax-header-right {
    text-align: center;
  }
  .ax-header-btn-text {
    font-size: 20px;
    color: $ui_color_white;
  }
  .ax-header-with-bg {
    background-color: rgba(234, 48, 48, 0.9);
    height: 80px;
    padding-bottom: 10px;
  }
  .ax-header-inverse {
    .ax-header-search {
      background: #f1f2f6;
      color: #b9b9b9;
    }
    .ax-header-btn-text {
      color: #b9b9b9;
    }
  }
</style>
