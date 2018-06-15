<template>
  <div class="ax-list" :class="['ax-button-type-'+type]">
    <div class="ax-list-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ax-list-body">
      <slot></slot>
    </div>
  </div> 
  
</template>
<script>
  import AxIcon from '../ax-icon/'
  export default {
    name: 'AxList',
    async fetch  (context) {

    },
    components: {
      AxIcon
    },
    props: {
      header: {
        default: () => {
          return ''
        }
      },
      arrow: {
        default: () => {
          return false
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
      
    },
    methods: {
    }

  }
</script>

<style lang="scss" >
  .ax-list {
    .ax-list-body {
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
      .ax-list-item:not(:last-child) {
            border-bottom: 1px solid #ddd;
      }
    }
  }
  
  
  
</style>
