<template>
  <div class="ax-button" :class="['ax-button-type-'+type,'ax-button-size-'+type,{'ax-button-fit':fit != null}]">
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
      size: {
        default: () => {
          return 'small'
        }
      },
      fit: {
        default: null
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
    display: inline-flex;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    height: 80px;
    padding: 0 20px;
    &.ax-button-fit {
      width: 100%;
      height: 100%;
    }
    a {
      color: #888888;
    }
    &.ax-button-type-default {
      border: 1px solid #ddd;
      background-color: #fff;
    }
    &.ax-button-type-text {

    }
    &.ax-button-type-primary {
      background-color: $Primary;
      color: $White;
    }
    &.ax-button-size-small {

    }

  }
  
  
</style>
