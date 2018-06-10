<template>
  <div class="ax-tabbar-pane">
    <router-link :to="to" class="ax-tabbar-pane-link">
      <div class="ax-tabbar-icon">
        <AxIcon :type="icon" />
        <span class="ax-tabbar-badge">
          <div></div>
          <sup></sup>
        </span>
      </div>
      <div class="ax-tabbar-title">{{title}}</div>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'AxTabBarPane',
    async fetch  (context) {

    },
    props: {
      title: {
        default:()=>{
          return ''
        }
      },
      icon: {
        default:()=>{
          return ''
        }
      },
      to: {
        default:()=>{
          return {}
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
    },
    computed: {
      
    },
    methods: {
    }

  }
</script>

<style lang="scss">
  .ax-tabbar-pane {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .ax-tabbar-title {
    font-size: 22px;
  }
  .ax-tabbar-pane-link {
    color: $c_tabbar_color_default;
    text-decoration: none;
    text-align: center;
    .ax-icon {
      font-size: 50px;
    }
    &.router-link-active {
      color: $c_tabbar_color_selected;
    }
  }
</style>
