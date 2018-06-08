<template>
  <div class="ax-list-item">
    <router-link tag="a" :to="to">
      <div class="ax-list-item-img">
        <img :src="data.img" />
      </div>
      <div class="ax-list-item-text">
        {{data.text}}
      </div>
    <slot></slot>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: 'AxGridListItem',
    async fetch  (context) {

    },
    props: {
      data: {
        default: () => {
          return {}
        }
      },
      to: {
        default: () => {
          return {}
        }
      },
    },

    data() {
      return {
        plusErrorWebview: ''
      }
    },
    created() {

    },
    mounted() {
      if (process.browser) {
        
      }
    },
    computed: {
      
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-list-item {
    background-color: $ui_color_white;
    box-sizing: border-box;
    > a {
      display: block;
      color: $ui_color_black;
      .ax-list-item-text {
        font-size: 26px;
        line-height: 32px;
        color: #3d3d3d;
      }
      .ax-list-item-text {
        display: -webkit-box;  
        display: -moz-box;  
        overflow: hidden;  
        text-overflow: ellipsis;  
        word-break: break-all;  
        -webkit-box-orient: vertical;  
        -webkit-line-clamp:2;  
      }
      .ax-list-item-img {
        background-color: $skeleton_color_bg;
        display: block;
        img {

        }
      }
    } 
  }


  .ax-grid-list-grid {
    .ax-list-item {
      // display: inline-flex;
      width: 373px;
      height:543px;
      background-color: $ui_color_white;
      margin-bottom: 4px;
      padding: 5px;
      box-sizing: border-box;
      > a {
        display: block;
        color: $ui_color_black;
        .ax-list-item-text {
          font-size: 26px;
          line-height: 32px;
        }
        .ax-list-item-text {
          height: 60px;
          width: 100%;
          margin-top: 10px;
          display: -webkit-box;  
          display: -moz-box;  
          overflow: hidden;  
          text-overflow: ellipsis;  
          word-break: break-all;  
          -webkit-box-orient: vertical;  
          -webkit-line-clamp:2;  
        }
        .ax-list-item-img {
          width: 362.5px;
          height: 362.5px;
          background-color: $skeleton_color_bg;
          display: block;
          img {
            max-width: 100%;
            width: 100%;
          }
        }
      } 
    }
  }
  
  .ax-list-title {
    
  }
  

  
  .ax-grid-list-col {
    .ax-list-item {
      width: 100%;
      height: 335px;
      padding: 20px;
      box-sizing: border-box;
      display: flex;
      > a {
        display: flex;
        .ax-list-item-text {
          width: 415px;
          // display: inline-block;
        }
        .ax-list-item-img {
          // display: inline-block;
          width: 295px;
          height: 295px;
          background-color: $skeleton_color_bg;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  
</style>
