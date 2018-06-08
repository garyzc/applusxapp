<template>
  <i class="ax-icon icon iconfont" :class="[type]"></i>
</template>
<script>
  export default {
    name: 'AxIcon',
    async fetch  (context) {

    },
    props: {
      type: {
        default: () => {
          return ''
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

  .ax-icon {
    
  }
  
  
</style>
