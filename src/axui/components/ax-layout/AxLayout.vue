<template>
  <div class="ax-layout" :style="cstyle" ref="root">
    <div class="ax-layout-top" v-if="$slots.top">
      <slot name="top"></slot>
    </div>
    <div class="ax-layout-top1" v-if="$slots.top1">
      <slot name="top1"></slot>
    </div>

    <div class="ax-layout-main" ref="main" :class="{'ax-layout-has-bottom':$slots.bottom,'ax-layout-has-bottom2':$slots.bottom2,'ax-layout-has-top':$slots.top,'ax-layout-has-top1':$slots.top1}">
      <slot></slot>
    </div>
    <div class="ax-layout-bottom1" v-if="$slots.bottom1">
      <slot name="bottom1"></slot>
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
      let resizeTimeout = ''
      let root = spjs(this.$el)
      spjs(window).on('resize',()=>{
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(this.handleResize,1000)
      })
      this.handleResize()
    },
    computed: {
      cstyle: function() {
        return {
          backgroundColor: this.bgc,
        }
      }
    },
    methods: {
      handleResize() {
        // let paddingtop = 0
        let root = spjs(this.$refs.root)
        let top1 = 0
        let top = 0
        let bottom = 0
        let bottom1 = 0
        let sp_bottom1 = root.find('.ax-layout-bottom1').first()
        let sp_bottom = root.find('.ax-layout-bottom').first()
        if(this.$slots.top) top = root.find('.ax-layout-top').first().height()
        if(this.$slots.top1) top1 = root.find('.ax-layout-top1').first().height()
        if(this.$slots.bottom) bottom = sp_bottom.height()
        if(this.$slots.bottom1) {
          bottom1 = sp_bottom1.height()
          sp_bottom1.css({
            bottom: sp_bottom.height() + 'px'
          })
        }
        
        // let mainHeight = spjs(this.$el).find('.ax-layout-top').height() + spjs(this.$el).find('.ax-layout-top1').height()
        console.log(this.$refs.main)
        spjs(this.$refs.main).css({
          paddingTop: top + top1 + 'px',
          paddingBottom: bottom + bottom1 + 'px',

        })
      }
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
      // height: $ax_navbar_height;
      z-index: 10;
    }
    // .ax-layout-has-top {
    //   padding-top: $ax_layout_top_height;
    // }
    // .ax-layout-has-top1 {
    //   padding-top: $ax_layout_top1_height;
    // }
    // .ax-layout-has-bottom {
    //   padding-bottom: $ax_layout_bottom_height;
    // }
    // .ax-layout-has-bottom2 {
    //   padding-bottom: $ax_layout_bottom2_height;
    // }
    .ax-layout-top1 {
      position: fixed;
      top:$ax_layout_top_height;
      // height: $ax_navbar_height;
      z-index: 10;
      width: 100%;
    }
    .ax-layout-bottom {
      // position: sticky;
      // position: -webkit-sticky;
      position: fixed;
      bottom:0;
      // height: $ax_layout_bottom_height;
      width: 100%;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      z-index: 10;
    }
    .ax-layout-bottom1 {
      position: fixed;
      // bottom:$ax_layout_bottom_height;
      // height: $ax_layout_bottom_height;
      width: 100%;
      transform: translateZ(0);
      -webkit-transform: translateZ(0);
      z-index: 10;
    }
  }
</style>
