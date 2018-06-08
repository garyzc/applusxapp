var slideMix = {
  // key: (to) => to.fullPath,
  transition (to, from) {
    var tn = {
      name: 'slide-right',
      mode: 'out-in',
      // enter (el, done) {
      //   done()
      // }
    }
    if (from) {
      let routersArr = sessionStorage.getItem('routers') && sessionStorage.getItem('routers').split(',') || []
      if (routersArr.length === 0) {
        routersArr.push(from.path)
        routersArr.push(to.path)
      } else {
        if (routersArr.indexOf(to.path) !== -1) {
          tn = {
            name: 'slide-right',
            mode: 'out-in',
            // enter (el, done) {
            //   done()
            // }
          }
          routersArr.splice(routersArr.indexOf(to.path) + 1, 100)
        } else {
          tn = {
            name: 'slide-left',
            mode: 'out-in',
            // enter (el, done) {
            //   done()
            // }
          }
          routersArr.push(to.path)
        }
      }
      sessionStorage.setItem('routers', routersArr.join(','))
    }
    return tn
  }

}

export {
  slideMix
}
