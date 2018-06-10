<template>
  <div class="ax-button" :class="['ax-button-type-'+type]">
    <span><slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: 'AxButton',
    async fetch  (context) {

    },
    props: {
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

  .ax-button {
    display: block;
    outline: 0 none;
    -webkit-appearance: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
    text-align: center;
    font-size: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
    color: #000;
    display: inline-block;
    border-radius: 5px;
    a {
      color: #888888;
    }
    &.ax-button-type-default {
      border: 1px solid #ddd;
      background-color: #fff;
    }
    &.ax-button-type-text {

    }
  }
  
  
</style>
