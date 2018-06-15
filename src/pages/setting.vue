<template>
    <AxLayout :style="{backgroundColor:'#f2f2f2'}">
      <AxNavbar :style="{backgroundColor: '#f3f3f3',color:'#333'}" >
        <AxIcon slot="left" type="icon-back_light"   @click.native="goBack" />
        设置
      </AxNavbar>
      
      <AxList>
        <AxListItem arrow>
          <AxAvatar icon="icon-my_light"  @click.native="goToProfile">
            <div slot="right">
              garychen
            </div>
            <div slot="rightsub">
                151****142
            </div>
          </AxAvatar>
        </AxListItem>
        <AxListItem arrow>我的收获地址</AxListItem>
      </AxList>
      <AxSpace size="lg" />
      <AxList>
        <AxListItem arrow>账户安全</AxListItem>
        <AxListItem arrow>关于我们</AxListItem>
      </AxList>
      <AxButton slot="bottom" fit type="primary">退出当前账户</AxButton>
    </AxLayout>
</template>

<script>
  // import {slideMix} from 'mixins/transition'
  import importWrap from 'util/importWrap'
  const components = importWrap(['AxLayout','AxNavbar','AxList','AxListItem','AxFlex','AxSpace','AxAvatar','AxButton'])
  export default {
    name: 'setting',
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
