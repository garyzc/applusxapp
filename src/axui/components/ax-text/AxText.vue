<template>
  <span class="ax-text" :class="processClass">
    <span class="ax-text-text1">{{text1}}</span>
    <span class="ax-text-text2">{{text2}}</span>
    <AxIcon v-if="this.icon!=''" :type="icon" />
  </span> 
  
</template>
<script>
  import AxIcon from '../ax-icon/'
  export default {
    name: 'AxText',
    async fetch  (context) {

    },
    components: {
      AxIcon
    },
    props: {
      lt: {
        default: () => {
          return 'tb'
        }
      },
      text1: {
        default: () => {
          return ''
        }
      },
      text2: {
        default: () => {
          return ''
        }
      },
      icon: {
        default: () => {
          return ''
        }
      },
      type: {
        default: () => {
          return ''
        }
      },
      maintext: {
        default: () => {
          return ''
        }
      },
      subtext: {
        default: () => {
          return ''
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
      processClass:function(){
        return [
          'ax-text-lt-'+this.lt,
          'ax-text-type-'+this.type
        ]
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >
  .ax-text {
    &.ax-text-lt-tb {
      display: inline-flex;
      flex-direction: column;
      text-align: center;
      .ax-text-text1 {
        margin-bottom: 20px;
      }
    }
    .ax-text-text1 {
      font-size: 25px;
    }
    .ax-text-text2 {
      font-size: 25px;
    }
  }
  
  
  
</style>
