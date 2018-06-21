<template>
  <div class="ax-tabs-bar" >
    <div class="ax-tabs-bar-tab">
      <div 
        class="ax-tabs-bar-nav-item" 
        :style="tabStyle" 
        v-for="(item,index) in forLabels" 
        :key="index" 
        @click="handleChange(index)"
        >
        {{item.label}} 
        
      </div>
      <div class="ax-tabs-bar-nav-underline" ref="underline" :style="tabStyle"></div>
    </div>
  </div>
</template>
<script>
  import anime from 'animejs'
  // import AxSwiper from '../ax-swiper/AxSwiper'
  export default {
    name: 'AxTabsBar',
    async fetch  (context) {

    },
    components: {
      // AxSwiper,
    },
    props: {
      value: {
        default: ''
      },
      labels: {
        default: []
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
        currentIndex:0,
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        
      }
      


    },
    watch:{
      'value': function(val) {
        this.handleChange(val)
      }
    },
    computed: {
      tabStyle: function() {
        return {
          width: (100 / this.forLabels.length) + '%'
        }
      },
      forLabels: function() {
        return this.labels
      }
    },
    methods: {
      
      handleChange(index) {
        this.currentIndex = index
        anime({
          targets: this.$refs.underline,
          translateX: (document.body.clientWidth/(this.forLabels.length))*this.currentIndex,
          width: [document.body.clientWidth/(this.forLabels.length)],
          duration: 400,
          easing: [.55,0,.1,1],
          complete: (anim) => {
            // this.currentIndex = this.currentIndex + 1

            // this.startAutoPlay()

          }
        })

        this.$emit('change',this.currentIndex)

      },
      

    }

  }
</script>

<style lang="scss" >
  .ax-tabs-bar {
    .ax-tabs-bar-tab {
      background-color: #fff;
      display: flex;
      position: relative;
      overflow: hidden;
      .ax-tabs-bar-nav-item {
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
        box-sizing: border-box;
      }
      .ax-tabs-bar-nav-underline {
        position: absolute;
        border: 1px solid $Primary;
        bottom: 0;
      }
    }
  }
  
  
  
</style>
