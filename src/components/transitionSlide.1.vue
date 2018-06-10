<template>
  <transition 
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-bind:css="false"
    >
      <keep-alive>
          <slot></slot>
      </keep-alive>
    </transition>
</template>

<script>
  import anime from 'animejs'
  export default {
    data() {
      return {
        stateHistory: [],
        transitionName: 'slide-left',
        isBack: false,
        cw: 0,
      }
    },
    methods: {
      getWidth() {
        return document.body.clientWidth
      },
      beforeEnter(el) {
        this.cw = document.body.clientWidth
        if(this.transitionName == 'slide-left') {
          // el.style.transform = 'translateX(100%)'
          el.style.left = this.cw+'px'
        } else {
          // el.style.transform = 'translateX(-100%)'
          el.style.left = -this.cw+'px'
        }
      },
      enter(el, done) {
        anime({
            targets: el,
            left: 0,
            duration: 400,
            easing: [.55,0,.1,1],
            complete: function(anim) {
                // el.style = ""
                done()
            }
        });
        
      },
      beforeLeave(el) {
        // el.style.transform = 'translateX(0)'
        el.style.left = '0px'
      },
      leave(el, done) {
        let translateX = this.cw
        if(this.transitionName == 'slide-left') {
          translateX = -this.cw
        }
        anime({
            targets: el,
            left: translateX,
            duration: 400,
            easing: [.55,0,.1,1],
            complete: function(anim) {
                done()               
            }
        });
      },
    },
    watch: {
    '$route' (to, from) {
      if (process.browser) {
          var l = this.stateHistory.length,
          // state = window.location.hash
          state = to.path
          console.log(state)

          if (l === 0) {
            this.stateHistory.push(state)
            return
          }
          if (state === this.stateHistory[ l - 2 ]) {
            this.stateHistory.pop()
            this.isBack = true
            // this.slidePageFrom(page, 'left')
          }
          else {
            this.stateHistory.push(state)
            // this.slidePageFrom(page, 'right')
          }

          // 监听路由变化时的状态为前进还是后退
          let isBack = this.isBack
          if (isBack) {
            this.transitionName = 'slide-right'
          }
          else {
            this.transitionName = 'slide-left'
          }
          this.isBack = false


      //     let routersArr=sessionStorage.getItem('routers')&&sessionStorage.getItem('routers').split(',')||[];  
      // if(routersArr.length==0){  
      //   routersArr.push(from.path)  
      //   routersArr.push(to.path);  
      // }else{  
      //   console.log(routersArr.indexOf(to.path))  
      //   if(routersArr.indexOf(to.path)!=-1){  
      //     this.transitionName='slide-right'  
      //     routersArr.splice(routersArr.indexOf(to.path)+1,100)  
      //   }else{  
      //     this.transitionName='slide-left'  
      //     routersArr.push(to.path)  
      //   }  
      // }  
      // sessionStorage.setItem('routers',routersArr.join(','))  

          
        }
      }
    }
  }
</script>
