<template>
  <div>
    <AxNavbar inverse>
      
    </AxNavbar>
    <Cateogry>
      <router-view></router-view>
    </Cateogry>
    
  </div>
</template>

<script>
  import AxHeader from 'axui/components/ax-header'
  import AxNavbar from 'axui/components/ax-navbar'
  import Cateogry from '../../components/category/category'
  export default {
    name: 'Category',
    components: {
      AxHeader,
      AxNavbar,
      Cateogry
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

<style lang="scss" >
  .page-category {
    height: 100%;

  }
</style>
