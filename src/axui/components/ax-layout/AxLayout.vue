<template>
  <div class="ax-layout">
    <slot></slot>

    <div class="ax-layout-bottom">
      <slot name="bottom" >

      </slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'AxLayout',
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
      position: fixed;
      bottom:0;
      width: 100%;
    }
  }
</style>
