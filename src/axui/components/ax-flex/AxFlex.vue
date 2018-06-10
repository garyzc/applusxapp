<template>
  <div class="ax-flex" :class="cstyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxFlex',
    async fetch  (context) {

    },
    props: {
      pt: {
        default: () => {
          return ['normal']
        }
      },
      pb: {
        default: () => {
          return ['normal']
        }
      },
      pl: {
        default: () => {
          return ['normal']
        }
      },
      pr: {
        default: () => {
          return ['normal']
        }
      },
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
      cstyle:function(){

        return [
          'ax-flex-pt-'+this.pt,
          'ax-flex-pb-'+this.pb,
          'ax-flex-pl-'+this.pl,
          'ax-flex-pr-'+this.pr,
          ]
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-flex {
    .ax-flex-small {
      padding: 10px 0;
    }
    &.ax-flex-pt-small {
      padding-top: 10px;
    }
    &.ax-flex-pt-big {
      padding-top: 20px;
    }
    &.ax-flex-pt-lg {
      padding-top: 30px;
    }

    &.ax-flex-pb-small {
      padding-bottom: 10px;
    }
    &.ax-flex-pb-big {
      padding-bottom: 20px;
    }
    &.ax-flex-pb-lg {
      padding-bottom: 30px;
    }

    &.ax-flex-pl-small {
      padding-left: 10px;
    }
    &.ax-flex-pl-big {
      padding-left: 20px;
    }
    &.ax-flex-pl-lg {
      padding-left: 30px;
    }
    &.ax-flex-pr-small {
      padding-right: 10px;
    }
    &.ax-flex-pr-big {
      padding-right: 20px;
    }
    &.ax-flex-pr-lg {
      padding-right: 30px;
    }
  }
  
  
</style>
