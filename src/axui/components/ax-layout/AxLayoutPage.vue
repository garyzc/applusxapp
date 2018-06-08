<template>
  <div class="ax-layout-page">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxLayoutPage',
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
  .ax-layout-page {
    flex: 1;
    overflow-x: hidden;
    overflow-y:auto; 
    position: absolute;
    bottom: 104px;
    left:0;
    right:0;
    top: 0;
    position: absolute;
    top:0;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    
    
  }
  
</style>
