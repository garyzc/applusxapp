<template>
  <div class="ax-flex">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxFlex',
    async fetch  (context) {

    },
    props: {
      direction: {
        default: () => {
          return 'row'
        }
      },
      wrap: {
        default: () => {
          return 'nowrap'
        }
      },
      justify: {
        default: () => {
          return 'flex-start'
        }
      },
      align: {
        default: () => {
          return 'flex-start'
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
      
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-flex {
    
  }
  
  
</style>
