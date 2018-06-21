<template>
  <div class="ax-tabs-pane" :class="['ax-button-type-'+type]">
    <slot></slot>
  </div>
</template>
<script>
  // import AxSwiperItem from '../ax-swiper/AxSwiperItem'
  export default {
    name: 'AxTabsPane',
    async fetch  (context) {

    },
    components: {
      // AxSwiperItem,
    },
    props: {
      label: {
        default: ''
      },
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
  .ax-tabs-pane {
    width: 100%;
  }

  
</style>
