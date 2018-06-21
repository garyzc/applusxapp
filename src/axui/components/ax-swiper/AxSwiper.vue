<template>
  <div class="ax-swiper" >
    <div class="ax-swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import anime from 'animejs'
  import {Qdom} from '../../utils/comUtil'

  export default {
    name: 'AxSwiper',
    props: {
      fitParent: {
        default: false
      },
      value: {
        default: 0
      },
      loop: {
        default: () => {
          return false
        }
      },
      autoplay: {
        default: () => {
          return false
        }
      },
      autoplayduration: {
        default: () => {
          return 2000
        }
      }
    },
    data() {
      return {
        disabled: true,
    　　startPos: {},
        endPos: {},
        isScrolling: 0,
        wrapper: '',
        currentIndex:0,
        currentPosition:0,
        totals: 0,
        autoplayInterval: '',
        animeBeforeRemberCurrentIndex:0,
        animeInstance: ''
      }
    },
    created() {

    },
    mounted() {
      let root = this.$el
      this.wrapper = root.querySelector('.ax-swiper-wrapper')
      this.wrapper.style.width = document.body.clientWidth + 'px'
      let swiperItems = root.querySelectorAll('.ax-swiper-item')
      this.totals = swiperItems.length
      
      for(let i=0; i<swiperItems.length; i++) {
        // if(this.fitParent == true) {
        //   swiperItems[i].style.height=spjs(this.$el).parent().height()
        // }
        swiperItems[i].style.width = document.body.clientWidth + 'px'
      }
      if(this.fitParent == true) {
        spjs(this.$el).find('.ax-swiper-item').height( (spjs(window).height() - spjs('.ax-layout-top').height() - spjs('.ax-layout-top1').height() ) + 'px')
      }
      if(this.loop === true && swiperItems.length > 1) {
        let firstClone = swiperItems[0].cloneNode(true)
        let lastClone = swiperItems[this.totals-1].cloneNode(true)
        Qdom(lastClone).insertBefore(swiperItems[0])
        Qdom(firstClone).insertAfter(swiperItems[this.totals-1])
        this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth + 'px)'
        this.currentIndex = 1
        this.totals = this.totals + 2
      } else {
        this.currentIndex = 0
      }
      
      this.startAutoPlay()
      root.addEventListener('touchstart',this.touchStart,false)
      if (process.browser) {
        
      }
    },
    computed: {
      
    },
    watch: {
      value: function(val){
        this.moveTo(val)
      }
    },
    methods: {
      handTouchSwipe() {
        alert('ok')
      },
      startAutoPlay() {
        if(this.autoplay === true) {
          this.clearAutoPlay()
          this.autoplayInterval = setInterval(()=>{
            this.moveNext()
          },this.autoplayduration)
        }
      },
      onChange() {
        this.$emit('change',this.currentIndex)
      },
      clearAutoPlay() {
        if(this.autoplayInterval != '') {
          clearInterval(this.autoplayInterval)
        }
      },
      touchStart(event) {
        this.clearAutoPlay()
        var touch = event.targetTouches[0]; //touches数组对象获得屏幕上所有的touch，取第一个touch
    　　this.startPos = {x:touch.pageX,y:touch.pageY,time:+new Date}; //取第一个touch的坐标值
        this.currentPosition = this.getCurrentPostionPx()
    // 　　isScrolling = 0; //这个参数判断是垂直滚动还是水平滚动
        if(this.animeInstance != ''){
          // this.animeInstance.pause()
        }
        // if(this.loop == true) {
        //   if(this.animeBeforeRemberCurrentIndex == 0) {
        //     this.currentIndex = this.totals  - 2
        //     this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth*(this.totals - 2) + 'px)'
        //   }
        //   if(this.animeBeforeRemberCurrentIndex ==  (this.totals - 1)) {
        //     this.currentIndex = 1
        //     this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth + 'px)'
        //   }
        // }

        this.$el.addEventListener('touchmove',this.touchMove,false)
    　　this.$el.addEventListener('touchend',this.touchEnd,false)

        this.disabled = true
      },
      movePrev() {
        if(this.loop == false) {
          if(this.currentIndex > 0) {

            this.animeBeforeRemberCurrentIndex = this.currentIndex - 1

            this.animeInstance = anime({
              targets: this.wrapper,
              translateX: document.body.clientWidth*(-(this.currentIndex-1)),
              duration: 400,
              easing: [.55,0,.1,1],
              complete: (anim) => {
                this.currentIndex = this.currentIndex - 1

                this.startAutoPlay()
                this.onChange()

              }
            })
          }
        } else {

          this.animeBeforeRemberCurrentIndex = this.currentIndex - 1
          

          this.animeInstance = anime({
            targets: this.wrapper,
            translateX: -document.body.clientWidth*(this.currentIndex-1),
            duration: 400,
            easing: [.55,0,.1,1],
            complete: (anim) => {
              this.currentIndex = this.currentIndex - 1
              
              if(this.currentIndex == 0) {
                this.currentIndex = this.totals  - 2
                this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth*(this.totals - 2) + 'px)'
              }
              
              this.startAutoPlay()
              this.onChange()
              
            }
          })
          
        }
      },
      moveTo(index) {
        this.animeInstance = anime({
          targets: this.wrapper,
          translateX: -document.body.clientWidth*(index),
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            this.currentIndex = index

            this.startAutoPlay()

            this.onChange()

          }
        })
      },
      moveNext() {
        if(this.loop == false) {
          if((this.currentIndex+1) < this.totals) {

            this.animeBeforeRemberCurrentIndex = this.currentIndex + 1

            this.animeInstance = anime({
              targets: this.wrapper,
              translateX: -document.body.clientWidth*(this.currentIndex+1),
              duration: 400,
              easing: [.55,0,.1,1],
              complete: (anim) => {
                this.currentIndex = this.currentIndex + 1

                this.startAutoPlay()

                this.onChange()

              }
            })
          }
        } else {

          this.animeBeforeRemberCurrentIndex = this.currentIndex + 1

          this.animeInstance = anime({
            targets: this.wrapper,
            translateX: -document.body.clientWidth*(this.currentIndex+1),
            duration: 400,
            easing: [.55,0,.1,1],
            complete: (anim) => {
              this.currentIndex = this.currentIndex + 1
              
              if(this.currentIndex == (this.totals - 1)) {
                this.currentIndex = 1
                this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth + 'px)'
              }

              this.startAutoPlay()
              this.onChange()
              
            }
          })
        }
      },
      getCurrentPostionPx() {
        if(this.wrapper.style.transform){
          return /\((\S+)px\)/.exec(this.wrapper.style.transform)[1]*1
        } else {
          return 0
        }
        
      },
      touchMove(event) {

        
        //当屏幕有多个touch或者页面被缩放过，就不执行move操作
        if(event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;


        let e = event.changedTouches ? event.changedTouches[0] : event
        if(this.disabled) {
          setTimeout(()=>{
            let dir = this.getSlideDirection(this.startPos.x,this.startPos.y,e.pageX,e.pageY)
            if(  dir == 3 || dir == 4 ) {
              this.disabled = false
            } else {
              this.$el.removeEventListener('touchmove',this.touchMove,false);
              this.$el.removeEventListener('touchend',this.touchEnd,false);
            }
          },50)
        }


        if(this.disabled) return false
        var touch = event.targetTouches[0];

        

        
        this.endPos = {x:touch.pageX - this.startPos.x,y:touch.pageY - this.startPos.y};

        // this.wrapper.style.css.transform = 'translateX('+ -document.body.clientWidth + 'px)'
        // let currentPos = /\((\S+)px\)/.exec(this.wrapper.style.transform)[1]*1
        
        
        

        this.isScrolling = Math.abs(this.endPos.x) < Math.abs(this.endPos.y) ? 1:0; //isScrolling为1时，表示纵向滑动，0为横向滑动

          

        if(this.isScrolling === 0){
          this.wrapper.style.transform = 'translateX('+ (this.currentPosition + ( this.endPos.x)) + 'px)'
          event.preventDefault(); //阻止触摸事件的默认行为，即阻止滚屏
          // this.slider.className = 'cnt';
          // this.slider.style.left = -this.index*600 + endPos.x + 'px';
        }
      },
      touchEnd(event) {
        if(this.disabled) return 

        var duration = +new Date - this.startPos.time; //滑动的持续时间
        if(this.isScrolling === 0){ //当为水平滚动时
          if(Number(duration) > 10 && Math.abs(this.startPos.x-this.endPos.x) > 10){
            // console.log('ddd'+new Date())
            //判断是左移还是右移，当偏移量大于10时执行
            let bili = (document.body.clientWidth - Math.abs(this.startPos.x-this.endPos.x))/2 - 50
            if(this.endPos.x > bili){
              console.log('右')
              if(this.loop == false && this.currentIndex == 0 ){
                this.resetTouchMoveDistance()
              } else {
                this.movePrev()
                console.log('mn')
              }
              
              
              
            }else if(this.endPos.x <= -bili){
              console.log('左')
              if(this.loop == false && this.currentIndex+1 == this.totals ){
                this.resetTouchMoveDistance()
              } else {
                this.moveNext()
                
              }
              
              
              
            } else {
              //还原位置
              this.resetTouchMoveDistance()
            }
          } else {
            this.resetTouchMoveDistance()
            console.log('eeeee')
            
          }
        }
        this.disabled = true
    　　//解绑事件
        this.startPos = {}
        this.endPos = {}
        this.$el.removeEventListener('touchmove',this.touchMove,false);
        this.$el.removeEventListener('touchend',this.touchEnd,false);
        
      },
      resetTouchMoveDistance() {
        this.animeInstance = anime({
          targets: this.wrapper,
          translateX: -document.body.clientWidth*(this.currentIndex),
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            // this.startAutoPlay()
          }
        })
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
    }

  }
</script>

<style lang="scss" >

.ax-swiper {
  // position: relative;
  width: 100%;
  // height: 140px;
  overflow: hidden;
  pointer-events:none;
  .ax-swiper-wrapper {
    display: flex;
    position: relative;
    width: 100%;
    min-height: 100%;
    height: 100%;
    z-index: 1;
    pointer-events:auto;
    // display: inline-flex;
  }
}

</style>
