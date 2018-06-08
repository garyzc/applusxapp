<template>
  <div class="ax-layout-header">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxLayoutHeader',
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

<style >

</style>
