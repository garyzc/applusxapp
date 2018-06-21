<template>
  <div class="ax-pull-to-refresh" @touchmove.prevent>
    <div class="ax-pull-to-refresh-container ax-touch ignore" ref="container" 
    >
      <div class="ax-pull-to-refresh-tip ignore">
        {{showRender}}
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import anime from 'animejs'
  export default {
    name: 'AxPullToRefresh',
    async fetch  (context) {

    },
    props: {
      scrollTarget: {
        default: () => {
          return 'parent'
        }
      },
      showPull: {
        default: '下拉刷新'
      },
      showRelease: {
        default: '释放刷新'
      },
      showLoading: {
        default: '正在刷新'
      },
      done: {
        default: false
      }
    },

    data() {
      return {
        dragging: false,
        disabled: true,
        start: {
          x: 0,
          y: 0,
        },
        state: 'pull',
        loading: false,
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        this.$el.addEventListener('touchstart',this.startDrag,false)
      }
    },
    computed: {
      showRender: function() {
        if(this.state == 'pull') {
          return this.showPull
        }
        if(this.state == 'release') {
          return this.showRelease
        }
        if(this.state == 'loading') {
          return this.showLoading
        }
      },
    },
    watch:{
      'done': function(val) {
        if(val) {
          this.reset()
        }
      }
    },
    methods: {
      canPull()  {
        if(this.scrollTarget == 'parent') {
          if(this.$el.parentNode.scrollTop == 0) {
            return true
          }
        }
        return false
      },
      startDrag(e) {
        if(this.canPull()) {
          e = e.changedTouches ? e.changedTouches[0] : e
          this.start.x = e.pageX
          this.start.y = e.pageY
          this.dragging = true
          this.$emit('pullStartDrag')

          this.$el.addEventListener('touchmove',this.onDrag,false)
　　      this.$el.addEventListener('touchend',this.stopDrag,false)
        }
        this.disabled = true
      },
      onDrag(e) {
        e = e.changedTouches ? e.changedTouches[0] : e

        if(this.disabled) {
          setTimeout(()=>{
            let dir = this.getSlideDirection(this.start.x,this.start.y,e.pageX,e.pageY)
            if( dir == 2 ) {
              this.disabled = false
            } else {
              this.$el.removeEventListener('touchmove',this.onDrag,false)
　　          this.$el.removeEventListener('touchend',this.stopDrag,false)
            } 
          },50)
        }
        
        // console.log(this.start.x - e.pageX)
        if (this.dragging && this.canPull() && !this.disabled) {
          
          if(e.pageY > this.start.y  ) {
            var dy = -65 + e.pageY - this.start.y
            this.$refs.container.style.transform = 'translateY('+( dy) + 'px)'
          }
          if(e.pageY <= this.start.y ) {
            this.$refs.container.style.transform = 'translateY(-65px)'
          }

          if(dy > 20) {
            this.state = 'release'
          }

        }
      },
      stopDrag(e) {
        
        if (this.dragging && this.canPull() && !this.disabled) {
          this.$emit('pullStopDrag')
          this.dragging = false
          if(this.state == 'release') {
            this.$emit('refresh')
            this.state = 'loading'
          } else {
            this.reset()
          }
          this.disabled = true
          this.$el.removeEventListener('touchmove',this.onDrag,false)
　　      this.$el.removeEventListener('touchend',this.stopDrag,false)
        }
        
      },
      getSlideAngle(dx, dy) {
        return Math.atan2(dy, dx) * 180 / Math.PI
      },
      getSlideDirection(startX, startY, endX, endY) {
        //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动  
        var dy = startY - endY;  
        var dx = endX - startX;  
        var result = 0;  

        //如果滑动距离太短  
        // if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {  
        //     returnresult;  
        // }  

        var angle = this.getSlideAngle(dx, dy);  
        if(angle >= -45 && angle < 45) {  
            result = 4;  
        }else if (angle >= 45 && angle < 135) {  
            result = 1;  
        }else if (angle >= -135 && angle < -45) {  
            result = 2;  
        }  
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {  
            result = 3;  
        }  

        return result;  
      },
      reset() {
        anime({
          targets: this.$refs.container,
          translateY: -65,
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            
          }
        })
      }

    }

  }
</script>

<style lang="scss" >

  .ax-pull-to-refresh {
    
    position: relative;
    max-height: 100vh;
    pointer-events:none;
    .ax-pull-to-refresh-container {
      pointer-events:auto;
      &.ignore {
        transform: translate3d(0,-65px,0);
      }
      .ax-pull-to-refresh-tip {
        font-size: 1rem;
        text-align: center;
        &.ignore {
          height: 65px;
        }
      }
    }
  }
  
  
</style>
