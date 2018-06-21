<template>
  <div class="ax-tabs" :class="['ax-button-type-'+type]">
    <div class="ax-tabs-tab">
      <div 
        class="ax-tabs-nav-item" 
        :style="tabStyle" 
        v-for="(item,index) in navList" 
        :key="index" 
        @click="handleChange(index)"
        >
        {{item.label}} 
        
      </div>
      <div class="ax-tabs-nav-underline" ref="underline" :style="tabStyle"></div>
    </div>
    <div class="ax-tabs-content" >
      <div class="ax-tabs-content-inner" ref="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import anime from 'animejs'
  // import AxSwiper from '../ax-swiper/AxSwiper'
  export default {
    name: 'AxTabs',
    async fetch  (context) {

    },
    components: {
      // AxSwiper,
    },
    props: {
      value: {
        default: ''
      },
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
        navList: [],
        activeKey: this.value,
        
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
      if (process.browser) {
        
      }
      
      let root = this.$el
      this.updateNav()
      this.wrapper = this.$refs.content
      spjs(this.wrapper).width( (this.navList.length * 100) + '%')

      let axTabsPanes = root.querySelectorAll('.ax-tabs-pane')
      this.totals = axTabsPanes.length
      for(let i=0; i<axTabsPanes.length; i++) {
        axTabsPanes[i].style.width = document.body.clientWidth + 'px'
      }

      this.wrapper.addEventListener('touchstart',this.touchStart,false)

    },
    computed: {
      tabStyle: function() {
        return {
          width: (100 / this.navList.length) + '%'
        }
      }
    },
    methods: {
      getTabs() {
        // return this.$children
        // return this.$children.filter(item => item.$options.name === 'AxSwiperItem');
        // console.log(this.$children)
        return this.$children.filter(item => item.$options.name === 'AxTabsPane');
      },
      updateNav() {
        this.navList = []
        this.getTabs().forEach((pane, index) => {
          
          this.navList.push({
            labelType: typeof pane.label,
            label: pane.label,
            name: pane.currentName || index,
            disabled: pane.disabled,
            closable: pane.closable
          })
        })
      },
      handleChange(index) {
        this.currentIndex = index
        this.animeInstance = anime({
          targets: this.wrapper,
          translateX: -document.body.clientWidth*(this.currentIndex),
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            // this.currentIndex = this.currentIndex + 1

            // this.startAutoPlay()

          }
        })

        
        anime({
          targets: this.$refs.underline,
          translateX: (document.body.clientWidth/(this.totals))*this.currentIndex,
          width: [0,document.body.clientWidth/(this.totals)],
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            // this.currentIndex = this.currentIndex + 1

            // this.startAutoPlay()

          }
        })

      },
      getCurrentPostionPx() {
        if(this.wrapper.style.transform){
          return /\((\S+)px\)/.exec(this.wrapper.style.transform)[1]*1
        } else {
          return 0
        }
        
      },
      touchStart(event) {
        // this.clearAutoPlay()
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

                // this.startAutoPlay()

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
              
              // this.startAutoPlay()
              
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

                // this.startAutoPlay()

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

              // this.startAutoPlay()
              
              
            }
          })
        }
      },

    }

  }
</script>

<style lang="scss" >
  .ax-tabs {
    .ax-tabs-tab {
      display: flex;
      position: relative;
      .ax-tabs-nav-item {
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        text-align: center;
        padding: 25px 0;
        font-size: 25px;
        border-bottom: 1px solid #ddd;
      }
      .ax-tabs-nav-underline {
        position: absolute;
        border: 1px solid $Primary;
        bottom: 0;
      }
    }
    .ax-tabs-content {
      overflow: hidden;
      .ax-tabs-content-inner {
        display: flex;
      }
    }
  }
  
  
  
  
</style>
