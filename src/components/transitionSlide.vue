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
      }
    },
    methods: {
      beforeEnter(el) {
        if(this.transitionName == 'slide-left') {
          el.style.transform = 'translateX(100%)'
        } else {
          el.style.transform = 'translateX(-100%)'
        }
        
      },
      enter(el, done) {
        anime({
            targets: el,
            translateX: 0,
            duration: 400,
            easing: [.55,0,.1,1],
            complete: function(anim) {
                done()
            }
        });
      },
      beforeLeave(el) {
        el.style.transform = 'translateX(0)'
      },
      leave(el, done) {
        let translateX = '100%'
        if(this.transitionName == 'slide-left') {
          translateX = '-100%'
        }
        anime({
            targets: el,
            translateX: translateX,
            duration: 400,
            easing: [.55,0,.1,1],
            complete: function(anim) {
                done()
                setTimeout(function(){
                    
                }.bind(this),400)
                
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
