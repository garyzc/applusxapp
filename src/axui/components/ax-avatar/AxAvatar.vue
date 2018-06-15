<template>
  <div class="ax-avatar" :class="['ax-avatar-size-'+size,{'inverse':inverse!=null}]">
    <span class="ax-avatar-icon" :style="{backgroundColor: bgc}">
      <slot></slot>
      <AxIcon v-if="this.icon!=''" :type="icon" />
    </span> 
    <div class="ax-avatar-right" v-if="$slots.right">
      <slot name="right"></slot>
      <span v-if="$slots.rightsub" class="ax-avatar-right-sub"><slot name="rightsub"></slot></span>
    </div>
  </div>
  
</template>
<script>
  import AxIcon from '../ax-icon/'
  export default {
    name: 'AxAvatar',
    async fetch  (context) {

    },
    components: {
      AxIcon
    },
    props: {
      icon: {
        default: () => {
          return ''
        }
      },
      bgc: {
        default: () => {
          return '#ccc'
        }
      },
      inverse: {
        default: () => {
          return null
        }
      },
      size: {
        default: () => {
          return 'small'
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
  .ax-avatar {
    display: inline-flex;
    align-items: center;
    .ax-avatar-icon {
      display: inline-flex;
      text-align: center;
      background: #ccc;
      color: #fff;
      white-space: nowrap;
      position: relative;
      overflow: hidden;
      vertical-align: middle;
      
      // line-height: 32px;
      
      justify-content: center;
      align-items: center;
    }
    .ax-avatar-right {
      color: #333;
    }
    &.inverse {
      .ax-avatar-icon {
        color: #fff;
      }
      .ax-avatar-right {
        color: #fff;
      }
    }
    &.ax-avatar-size-small {
      .ax-avatar-icon {
        width: 90px;
        height: 90px;
        border-radius: 90px;
      }
      .ax-avatar-right {
        font-size: 30px;
        margin-left: 20px;
        .ax-avatar-right-sub {
          font-size: 14px;
        }
      }
    }
    &.ax-avatar-size-big {
      .ax-avatar-icon {
        width: 110px;
        height: 110px;
        border-radius: 110px;
      }
      .ax-avatar-right {
        font-size: 25px;
        margin-left: 25px;
      }
    }

  }
  
  
  
</style>
