<template>
    <AxLayout class="page-search">
      <AxNavbar :style="{backgroundColor: '#ff4b32'}" inverse>
        <AxIcon slot="left" type="icon-back_light" @click.native="goBack" />
        <AxInput :radius="true" icon="icon-search_light" />
        <AxButton slot="right" type="text" @click.native="handleSearch" v-show="navRight == 'search'">搜索</AxButton>
        <AxIcon slot="right" :type="listShowType" @click.native="handleListShowType" v-show="navRight == 'listshowtype'" />
      </AxNavbar>

      <AxGridList :showType="listShowType == 'icon-list' ? 'col':'grid'">
        <AxGridListItem v-for="(item,index) in $store.state.search.list" :key="index" :data="item" :to="{name:'product'}"></AxGridListItem>
      </AxGridList>

    </AxLayout>
    
</template>

<script>
  // import {slideMix} from 'mixins/transition'
  import AxNavbar from 'axui/components/ax-navbar'
  import AxInput from 'axui/components/ax-input'
  import AxButton from 'axui/components/ax-button'
  import AxGridList from 'axui/components/ax-grid-list'
  import AxLayout from 'axui/components/ax-layout'
  export default {
    created () {
      this.fetchData()
      
    },
    // mixins: [slideMix],
    components: {
      AxNavbar,
      AxInput,
      AxButton,
      AxGridList,
      AxGridListItem: AxGridList.AxGridListItem,
      AxLayout,
    },
    
    async fetch  (context) {

    },

    data() {
      return {
        plusErrorWebview: '',
        navRight: 'search',
        listShowType: 'icon-list',
      }
    },
    mounted() {
      if (process.browser) {
        
      }
    },
    computed: {
      
    },
    methods: {
      fetchData () {
        this.$store.dispatch('search/query', {})
      },
      //搜索点击
      handleSearch () {
        this.navRight = 'listshowtype'
      },
      //列表显示状态
      handleListShowType () {
        this.listShowType = this.listShowType == 'icon-list' ? 'icon-cascades': 'icon-list'
      }
    }

  }
</script>

<style lang="scss" >
  .page-search {
    width: 750px;
    position: absolute;
    height: 100%;
  }
</style>
