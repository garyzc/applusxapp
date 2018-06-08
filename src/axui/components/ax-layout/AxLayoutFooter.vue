<template>
  <div class="ax-layout-footer">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxLayoutFooter',
    async fetch  (context) {

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
  .ax-layout-footer {
    flex: 1;
    display: flex;
  }
</style>
