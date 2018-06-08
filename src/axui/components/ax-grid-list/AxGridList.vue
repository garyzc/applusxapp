<template>
  <div class="ax-grid-list" :class="['ax-grid-list-'+showType]">
    <div class="ax-grid-list-title">
      标题
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
      showType: {
        default: () => {
          return 'grid'
        }
      }
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
      font-size: 14px;
      color: #888;
    }
  }
  .ax-grid-list-title {
    
  }
  .ax-grid-list-body {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
</style>
