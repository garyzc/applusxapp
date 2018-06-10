<template>
  <div class="ax-card" :class="['ax-card-radius-'+radius]">
    <div name="header" class="ax-card-header" v-if="$slots.hl || $slots.hr">
      <div class="ax-card-header-left">
        <slot name="hl"></slot>
      </div>
      <div class="ax-card-header-right">
        <slot name="hr"></slot>
      </div>
      
    </div>
    <div class="ax-card-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxCard',
    async fetch  (context) {

    },
    props: {
      type: {
        default: () => {
          return 'default'
        }
      },
      radius: {
        default: () => {
          return 'normal'
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

  .ax-card {
    background-color: #fff;
    &.ax-card-radius-small {
      border-radius: 10px;
    }
    .ax-card-header {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      padding:25px;
      .ax-card-header-left {
        font-size: 30px;
        font-weight: bold;
      }
    }
    .ax-card-body {
      padding: 25px;
    }
  }
  
  
</style>
