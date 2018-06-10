<template>
  <div class="ax-grid-list" :class="['ax-grid-list-'+showType]" :style="{'backgroundColor':bgcolor}">
    <div class="ax-grid-list-title" v-if="title">
      {{title}}
    </div>
    <div class="ax-grid-list-body">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxGridList',
    async fetch  (context) {

    },
    props: {
      columns: {
        default: () => {
          return '2'
        }
      },
      bgcolor: {
        default: () => {
          return 'transparent'
        }
      },
      showType: {
        default: () => {
          return 'grid'
        }
      },
      title: {
        default: () => {
          return ''
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

  .ax-grid-list {
    background-color: $ui_color_gray_bg;
    .ax-grid-list-title {
      padding: 15px 15px 9px;
      font-size: 30px;
      color: #999;
      font-weight: bold;
      text-align: center;
    }
  }
  .ax-grid-list-title {
    
  }
  .ax-grid-list-body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    background: $c_gridlist_body_bg;
    padding: 20px 0;
  }
  
</style>
