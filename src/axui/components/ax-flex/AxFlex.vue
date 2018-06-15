<template>
  <div class="ax-flex" :class="cstyle" :style="{backgroundColor:bgc}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxFlex',
    async fetch  (context) {

    },
    props: {
      flex: {
        default: () => {
          return true
        }
      },
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
          return 'start'
        }
      },
      align: {
        default: () => {
          return 'start'
        }
      },
      bgc: {
        default: () => {
          return 'transparent'
        }
      },
      fit: {
        default: () => {
          return true
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
          {'ax-flex-flex':this.flex},
          'ax-flex-pt-'+this.pt,
          'ax-flex-pb-'+this.pb,
          'ax-flex-pl-'+this.pl,
          'ax-flex-pr-'+this.pr,
          'ax-justify-'+this.justify,
          {'ax-flex-fit':this.fit}
          ]
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-flex {
    box-sizing: border-box;
    &.ax-flex-flex {
      display: flex;
    }
    &.ax-flex-fit {
      width: 100%;
    }
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

  .ax-justify-between {
    justify-content: space-between;
  }
  .ax-justify-around {
    justify-content: space-around;
  }
  
  
</style>
