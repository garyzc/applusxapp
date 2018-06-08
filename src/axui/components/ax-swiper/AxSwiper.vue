<template>
  <div class="ax-swiper" v-touch-swipe="handTouchSwipe">
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
        swiperItems[i].style.width = document.body.clientWidth + 'px'
      }
      if(this.loop === true && swiperItems.length > 1) {
        let firstClone = swiperItems[0].cloneNode(true)
        let lastClone = swiperItems[this.totals-1].cloneNode(true)
        Qdom(lastClone).insertBefore(swiperItems[0])
        Qdom(firstClone).insertAfter(swiperItems[this.totals-1])
        this.wrapper.style.transform = 'translateX('+ -document.body.clientWidth + 'px)'
        this.currentIndex = 1
        this.totals = this.totals + 2
      }
      
      this.startAutoPlay()
      root.addEventListener('touchstart',this.touchStart,false)
      if (process.browser) {
        
      }
    },
    computed: {
      
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
      },
      movePrev() {
        if(this.loop == false) {
          if(this.currentIndex > 0) {

            this.animeBeforeRemberCurrentIndex = this.currentIndex - 1

            this.animeInstance = anime({
              targets: this.wrapper,
              translateX: document.body.clientWidth*(-this.currentIndex-1),
              duration: 400,
              easing: [.55,0,.1,1],
              complete: (anim) => {
                this.currentIndex = this.currentIndex - 1

                this.startAutoPlay()

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
              
            }
          })
          
        }
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
        
        var duration = +new Date - this.startPos.time; //滑动的持续时间
        if(this.isScrolling === 0){ //当为水平滚动时
          if(Number(duration) > 10 && Math.abs(this.startPos.x-this.endPos.x) > 10){
            console.log('ddd'+new Date())
            //判断是左移还是右移，当偏移量大于10时执行
            let bili = (document.body.clientWidth - Math.abs(this.startPos.x-this.endPos.x))/2 - 50
            if(this.endPos.x > bili){
              console.log('右')
              this.movePrev()
              
              
            }else if(this.endPos.x <= -bili){
              console.log('左')
              
              this.moveNext()
              
              
            } else {
              //还原位置
              this.resetTouchMoveDistance()
            }
          } else {
            this.resetTouchMoveDistance()
            console.log('eeeee')
            
          }
        }
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
      }
    }

  }
</script>

<style lang="scss" >

.ax-swiper {
  // position: relative;
  width: 100%;
  // height: 140px;
  overflow: hidden;
  .ax-swiper-wrapper {
    display: flex;
    position: relative;
    width: 100%;
    min-height: 100%;
    height: 100%;
    z-index: 1;
    // display: inline-flex;
  }
}

</style>
