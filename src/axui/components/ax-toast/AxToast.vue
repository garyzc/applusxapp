<template>
  <div class="ax-toast-wrap" v-if="show">
    <span class="ax-toast">{{text}}</span>
  </div>
</template>
<script>
  export default {
    name: 'AxToast',
    async fetch  (context) {

    },
    data() {
      return {
        show: false,
        text: '',
        duration:'3000',
        type: ''
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

  .ax-toast-wrap {
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    align-items: center;
    justify-content: center;
    .ax-toast {
      display: inline-flex;
      align-items: center;
      height: 60px;
      border-radius: 40px;
      padding: 0 20px;
      box-sizing: border-box;
      color: $White;
      font-size: 25px;
      background-color: rgba($Black,0.6);
    }
  }
  
  
</style>
