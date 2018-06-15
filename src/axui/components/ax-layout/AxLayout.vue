<template>
  <div class="ax-layout" :style="cstyle" >
    <div class="ax-layout-top" v-if="$slots.top">
      <slot name="top"></slot>
    </div>
    <div class="ax-layout-main" :class="{'ax-layout-has-bottom':$slots.bottom,'ax-layout-has-bottom2':$slots.bottom2,'ax-layout-has-top':$slots.top}">
      <slot></slot>
    </div>
    <div class="ax-layout-bottom2" v-if="$slots.bottom2">
      <slot name="bottom2"></slot>
    </div>

    <div class="ax-layout-bottom ax-sync-fixed" v-if="$slots.bottom">
      <slot name="bottom" >

      </slot>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'AxLayout',
    props: {
      bgc: {
        default: () => {
          return 'transparent'
        }
      },
    },
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
      cstyle: function() {
        return {
          backgroundColor: this.bgc,
        }
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >
  .ax-layout {
    position: absolute;
    width: 750px;
    height:100%;
    // display: flex;
    // height: 100%;
    // overflow: hidden;
    // flex-direction: column
    .ax-layout-top {
      position: fixed;
      top:0;
      height: $ax_navbar_height;
      z-index: 10;
    }
    .ax-layout-has-top {
      padding-top: $ax_layout_top_height;
    }
    .ax-layout-has-bottom {
      padding-bottom: $ax_layout_bottom_height;
    }
    .ax-layout-has-bottom2 {
      padding-bottom: $ax_layout_bottom2_height;
    }
    .ax-layout-bottom {
      // position: sticky;
      // position: -webkit-sticky;
      position: fixed;
      bottom:0;
      height: $ax_layout_bottom_height;
      width: 100%;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      z-index: 10;
    }
    .ax-layout-bottom2 {
      position: fixed;
      bottom:$ax_layout_bottom_height;
      height: $ax_layout_bottom_height;
      width: 100%;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      z-index: 10;
    }
  }
</style>
