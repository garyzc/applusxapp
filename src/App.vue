<template>
  <div class="app">

    <transitionSlide >
        <router-view class="view-page" ></router-view>
        <!-- <nuxt class="view-page" keep-alive/> -->
    </transitionSlide>
    <!-- <nuxt class="view-page"   :nuxtChildKey="routerViewKey" /> -->
    <!-- <my-footer/> -->
  </div>
</template>

<script>

let cachedTransition = 'slide-left'
// import MyFooter from '~/components/Footer.vue'
// import '~/assets/scss/global.scss'
import transitionSlide from './components/transitionSlide'
export default {
  key: (to) => to.fullPath,
  
  components: {
    // MyFooter
    transitionSlide
  },
  mounted () {
    // !function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);
    // (function(){	var YUU1=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74"],a=function(){var h$XjyVha_2=YUU1["\x67\x65\x74\x42\x6f\x75\x6e\x64\x69\x6e\x67\x43\x6c\x69\x65\x6e\x74\x52\x65\x63\x74"]()["\x77\x69\x64\x74\x68"];YUU1["\x73\x74\x79\x6c\x65"]["\x66\x6f\x6e\x74\x53\x69\x7a\x65"]=.0625*(640<=h$XjyVha_2?640:h$XjyVha_2)+"\x70\x78"},isbjWDMW3=null;window["\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72"]("\x72\x65\x73\x69\x7a\x65",function(){clearTimeout(isbjWDMW3);isbjWDMW3=setTimeout(a,300)});a()})();
  },
  data() {
    return {
      plusErrorWebview: '',
      stateHistory: [],
      transitionName: 'slide-left',
      isBack: false,
    }
  },
  created() {

  },
  mounted() {
    if (process.browser) {
      // require('lib-flexible/flexible.js')
      // !function(e,t){function n(){t.body?t.body.style.fontSize=12*o+"px":t.addEventListener("DOMContentLoaded",n)}function d(){var e=i.clientWidth/10;i.style.fontSize=e+"px"}var i=t.documentElement,o=e.devicePixelRatio||1;if(n(),d(),e.addEventListener("resize",d),e.addEventListener("pageshow",function(e){e.persisted&&d()}),o>=2){var a=t.createElement("body"),s=t.createElement("div");s.style.border=".5px solid transparent",a.appendChild(s),i.appendChild(a),1===s.offsetHeight&&i.classList.add("hairlines"),i.removeChild(a)}}(window,document);
      // (function(){	var YUU1=window["\x64\x6f\x63\x75\x6d\x65\x6e\x74"]["\x64\x6f\x63\x75\x6d\x65\x6e\x74\x45\x6c\x65\x6d\x65\x6e\x74"],a=function(){var h$XjyVha_2=YUU1["\x67\x65\x74\x42\x6f\x75\x6e\x64\x69\x6e\x67\x43\x6c\x69\x65\x6e\x74\x52\x65\x63\x74"]()["\x77\x69\x64\x74\x68"];YUU1["\x73\x74\x79\x6c\x65"]["\x66\x6f\x6e\x74\x53\x69\x7a\x65"]=.0625*(750<=h$XjyVha_2?750:h$XjyVha_2)+"\x70\x78"},isbjWDMW3=null;window["\x61\x64\x64\x45\x76\x65\x6e\x74\x4c\x69\x73\x74\x65\x6e\x65\x72"]("\x72\x65\x73\x69\x7a\x65",function(){clearTimeout(isbjWDMW3);isbjWDMW3=setTimeout(a,300)});a()})();
      this.initPlus()

      if(window.viewportUnitsBuggyfill) {
        window.onload = function () { window.viewportUnitsBuggyfill.init({ hacks: window.viewportUnitsBuggyfillHacks }); }
      }
      

    }
  },
  computed: {
    routerViewKey () {
      // if (this.$route.path.startsWith('/news')) {
      //   return 'news'
      // }
      return this.$route.fullPath
    }
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
            this.transitionName = 'slide-left'
          }
          else {
            this.transitionName = 'slide-right'
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
  },
  methods: {
    
    initPlus () {
      document.addEventListener("plusready", this.onPlusReady, false)
    },
    onPlusReady () {
      document.addEventListener("netchange", this.onNetChange, false)
    },
    onNetChange(){
      var nt = plus.networkinfo.getCurrentType();
      switch (nt){
        case plus.networkinfo.CONNECTION_ETHERNET:
        case plus.networkinfo.CONNECTION_WIFI:
        // alert("Switch to Wifi networks!"); 
          this.hideErrorPage()
        break; 
        case plus.networkinfo.CONNECTION_CELL2G:
        case plus.networkinfo.CONNECTION_CELL3G:
        case plus.networkinfo.CONNECTION_CELL4G:
        // alert("Switch to Cellular networks!");  
          this.hideErrorPage()
        break; 
        default:
        // alert("Not networks!"); 
          if(this.plusErrorWebview == '') {
              this.plusErrorWebview = plus.webview.create('/errornetwork.html')
          }
          this.showErrorPage()
        break;
      }
    },
    showErrorPage () {
      if(this.plusErrorWebview != '') {
        this.plusErrorWebview.show()
      }
    },
    hideErrorPage () {
      if(this.plusErrorWebview != '') {
        this.plusErrorWebview.hide()
      }
    }
  }

}
</script>

<style  lang="scss" >
  // @import "../assets/scss/global.scss";
  
  html,body {
    height: 100%;
    /* font-size: 12px; */
    padding: 0;
    margin: 0;
  }
  body {
    font-family: "微软雅黑";
  }
  
    html,body {
      height: 100%;
      /* font-size: 12px; */
      padding: 0;
      margin: 0;
    }
    ul,ul li {
      padding:0;
      margin: 0;
      list-style: none;
    }
  ul,ul li {
    padding:0;
    margin: 0;
    list-style: none;
  }

  $color: #ff9900;

  
  body {
    background: $color1;
  }
  #__nuxt {
    height: 100%;
  }
  #__layout {
    height: 100%;
  }
  .app {
    position: absolute;
    height: 100%;
    float:left;
    // display: flex;
    // position: relative;
    // flex-direction: row;
    width: 100%;
  }
  .title {
    font-size: pxTorem(20);
  }
  
</style>
