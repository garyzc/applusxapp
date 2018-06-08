<template>
  <div class="ax-tabbar-tab">
    <router-link :to="to">
      <div class="ax-tabbar-icon">
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
  .ax-tabbar-tab {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .ax-tabbar-title {
    font-size: 22px;
  }
</style>
