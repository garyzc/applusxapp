<template>
  <div class="ax-layout" :style="{backgroundColor: bgc}">
    <slot></slot>

    <div class="ax-layout-bottom ax-sync-fixed">
      <slot name="bottom" >

      </slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'AxLayout',
    props: {
      bgc: {
        default: () => {
          return 'transparent'
        }
      },
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

<style lang="scss" >
  .ax-layout {
    position: absolute;
    width: 750px;
    height:100%;
    // display: flex;
    // height: 100%;
    // overflow: hidden;
    // flex-direction: column
    .ax-layout-bottom {
      // position: sticky;
      // position: -webkit-sticky;
      position: fixed;
      bottom:0;
      width: 100%;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
    }
  }
</style>
