<template>
  <div class="ax-tabs-pane" :class="['ax-button-type-'+type]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxTabsPane',
    async fetch  (context) {

    },
    props: {
      type: {
        default: () => {
          return 'default'
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

  .ax-tabs-tab-item {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 15px;
    height: 43.5px;
    line-height: 43.5px;
  }
  
  
</style>
