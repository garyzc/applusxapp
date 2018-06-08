<template>
  <div class="category">
    <div class="category-tabs">
      <ul>
        <router-link tag="li" v-for="(item,index) in categorylist" :key="index" :to="{name:'categorylist',params:{id:index?index:null}}">{{item.name}}</router-link>
      </ul>
    </div>
    <div class="category-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import AxHeader from 'axui/components/ax-header'
  export default {
    props: {
      categorylist: {
        default: () => {
          return [
            { name: '热门推荐', id: 0},
            { name: '手机数码', id: 1},
            { name: '手机数码', id: 2},
            { name: '手机数码', id: 3},
            { name: '手机数码', id: 4},
            { name: '手机数码', id: 5},
            { name: '手机数码', id: 6},
            { name: '手机数码', id: 7},
            { name: '手机数码1', id: 8},
            { name: '手机数码2', id: 9},
            { name: '手机数码3', id: 10},
          ]
        }
      },
    },
    components: {
      AxHeader
    },
    async fetch  (context) {

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

<style lang="scss" scoped>
  .category {
    display: flex;
    .category-tabs {
      height: calc(100vh -130px - #{$ax_tabs_height});
      overflow-x: hidden;
      width: 186px;
      background-color: #f6f6f6;
      ul {
        li {
          font-size: 25px;
          padding: 35px 0;
          text-align: center;
          color: #7f7f7f;
        }
      }
    }
    .category-content {
      height: calc(100vh -130px - #{$ax_tabs_height});
      overflow-x: hidden;
    }
  }
</style>
