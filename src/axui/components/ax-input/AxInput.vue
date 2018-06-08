<template>
  <div class="ax-input" :class="{radius: radius,hasicon:icon != ''}">
    <input type="text" />
    <AxIcon class="ax-input-icon" :type="icon" v-if="icon != ''" />
  </div>
</template>
<script>
  import AxIcon from '../ax-icon/'
  export default {
    name: 'AxInput',
    async fetch  (context) {

    },
    components: {
      AxIcon
    },
    props: {
      radius: {
        default: () => {
          return false
        }
      },
      icon: {
        default: () => {
          return ''
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

  .ax-input {
    position: relative;
    box-sizing: border-box;
    input {
      height: 60px;
      border:none;
      width: 100%;
      box-sizing: border-box;
      font-size: 30px;
    }
    &.radius {
      input {
        border-radius: 30px; 
      }
    }
    .ax-input-icon {
      position: absolute;
      top: 50%;
      left: 20px;
      transform: translate3d(0,-50%,0);
      font-size: 30px;
    }
    &.hasicon {
      input {
        padding-left: 55px;
      }
    }
  }
  
  
  
</style>
