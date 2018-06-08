import anime from 'animejs'
var slideMix = {
  // key: (to) => to.fullPath,
  transition (to, from) {
    var tn = {
      css: false,
      mode: '',
      beforeEnter (el) {
        el.style.transform = 'translateX(100%)'
      },
      enter (el, done) {
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
      beforeLeave (el) {
        el.style.transform = 'translateX(0)'
      },
      leave (el, done) {
        anime({
          targets: el,
          translateX: '-100%',
          duration: 400,
          easing: [.55,0,.1,1],
          complete: function(anim) {
              done()
              setTimeout(function(){
                  
              }.bind(this),400)
              
          }
        });
      }
    }
    // if (from) {
    //   let routersArr = sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',') || []
    //   if (routersArr.length === 0) {
    //     routersArr.push(from.path)
    //     routersArr.push(to.path)
    //   } else {
    //     if (routersArr.indexOf(to.path) !== -1) {
    //       tn = {
    //         name: 'slide-right',
    //         mode: 'out-in',
    //         // enter (el, done) {
    //         //   done()
    //         // }
    //       }
    //       routersArr.splice(routersArr.indexOf(to.path) + 1, 100)
    //     } else {
    //       tn = {
    //         name: 'slide-left',
    //         mode: 'out-in',
    //         // enter (el, done) {
    //         //   done()
    //         // }
    //       }
    //       routersArr.push(to.path)
    //     }
    //   }
    //   sessionStorage.setItem('routers', routersArr.join(','))
    // }
    return tn
  }

}

export {
  slideMix
}
