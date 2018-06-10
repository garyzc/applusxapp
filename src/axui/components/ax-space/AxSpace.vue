<template>
  <div class="ax-space" :class="cstyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxSpace',
    async fetch  (context) {

    },
    props: {
      size: {
        default: () => {
          return ['md']
        }
      },
      
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
      cstyle:function(){

        return [
          'ax-space-'+this.size,
          ]
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-space {
    &.ax-space-md {
      height: 10px;
    }
    &.ax-space-xl {
      height: 20px;
    }
    &.ax-space-lg {
      height: 30px;
    }
    
  }
  
  
</style>
