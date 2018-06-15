<template>
    <AxLayout>
      profile
    </AxLayout>
</template>

<script>
  // import {slideMix} from 'mixins/transition'
  import importWrap from 'util/importWrap'
  const components = importWrap(['AxLayout','AxHeader','AxCard','AxFlex','AxSpace','AxButton','AxGrid','AxAvatar','AxText'])
  export default {
    name: 'profile',
    asyncData ({ params }) {
      return {
        plusErrorWebview: ''
      }
    },
    // mixins: [slideMix],
    components: {
      ...components
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

</style>
