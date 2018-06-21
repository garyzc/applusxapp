<template>
  <div class="ax-tabbar-wrap">
    <div class="ax-tabbar">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxTabBar',
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

<style lang="scss" >

  .ax-tabbar-wrap {
    width: 100%;
    height: $ax_tabs_height;
  }
  .ax-tabbar {
    background-color: #fff;
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
    border-top: 1px solid #d3d3d3;
    box-sizing: border-box;
    height: $ax_tabs_height;
    display: flex;
  }
</style>
