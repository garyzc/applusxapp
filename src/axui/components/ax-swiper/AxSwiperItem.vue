<template>
  <div class="ax-swiper-item" v-bind:style="bgStyle">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AxSwiperItem',
    props: {
      bgimg: {
        default: () => {
          return ''
        }
      }
    },

    data() {
      return {
        plusErrorWebview: '1'
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        
      }
    },
    computed: {
      bgStyle: function() {
        return {
          'background-image': 'url('+ this.bgimg +')'
        }
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-swiper-item {
    height: 100%;
    // background-color: #ccddcc;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover;
  }

</style>
