<template>
    <div class="page-login">
      login
    </div>
    
</template>

<script>
  // import {slideMix} from 'mixins/transition'
  export default {
    name: 'login',
    asyncData ({ params }) {
      return {
        plusErrorWebview: ''
      }
    },
    // mixins: [slideMix],
    components: {
      
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
  .page-login {
    width: 750px;
    position: absolute;
    height: 100%;
    background-color: #ff9900;
  }
</style>
