<template>
  <div class="ax-navbar " :class="{'ax-header-fixed': fixed,'ax-navbar-inverse':inverse,'ax-navbar-light':theme=='light'}" :style="styles">
    <div class="ax-navbar-left">
      <slot name="left"></slot>
      <!-- <div class="ax-header-btn-icon"></div>
      <div class="ax-header-btn-text">扫啊扫</div> -->
    </div>
    <div class="ax-navbar-mid">
      <slot></slot>
    </div>
    <div class="ax-navbar-right">
      <slot name="right"></slot>
      <!-- <div class="ax-header-btn-icon"></div>
      <div class="ax-header-btn-text">消息</div> -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxNavbar',
    props: {
      styles: {
        default: () => {
          return {}
        }
      },
      theme: {
        default:() => {
          return 'light'
        }
      },
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
      let scrollPage = document.querySelector('.ax-layout-page')
      if(scrollPage) {
          scrollPage.addEventListener('scroll', () => {
              
              if(scrollPage.scrollTop > 10) {
              this.$el.classList.add('ax-header-with-bg')
              } else {
              this.$el.classList.remove('ax-header-with-bg')
              }
          })
      }
    },
    computed: {
      
    },
    methods: {
      handlerSearchCLick() {
        this.$emit('searchClick')
      }
    }

  }
</script>

<style lang="scss" >
  .ax-navbar {
    // background: $skeleton_color_bg;
    width: 100%;
    height: $ax_navbar_height;
    // padding: 10px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    // box-sizing: border-box;
    padding-top: 45px;
    .ax-icon {
      color: #333;
    }
    .ax-button {
      color: #333;
    }
  }
  .ax-header-fixed {
    position: fixed;
    top:0;
    z-index: 100;
    transition: all 0.3s;
  }
  .ax-navbar-left {
    // flex: 1;
    width: 85px;
  }
  .ax-navbar-right {
    // flex: 1;
    width: 85px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ax-navbar-mid {
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
  }
  
  .ax-navbar-left,.ax-navbar-right {
    text-align: center;
  }
  .ax-header-btn-text {
    font-size: 20px;
    color: $ui_color_white;
  }
  .ax-header-with-bg {
    background-color: rgba(234,101,48,0.9);
    height: 80px;
    padding-bottom: 10px;
  }
  .ax-navbar-inverse {
    .ax-icon {
      color: #fff;
    }
    .ax-button {
      color: #fff;
    }
  }
  .ax-navbar-light {
    
  }
</style>
