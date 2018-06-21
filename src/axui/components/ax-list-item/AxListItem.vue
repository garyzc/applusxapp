<template>
  <div class="ax-list-item">
    <div class="ax-list-line">
      <div class="ax-list-content">
        <slot></slot>
      </div>
      <div class="ax-list-extra">
        <slot name="extra"></slot>
      </div>
      <div class="ax-list-arrow" v-if="arrow != null">
        <AxIcon  type="icon-right" />
      </div>
    </div>
  </div>
  
</template>
<script>
  import AxIcon from '../ax-icon/'
  export default {
    name: 'AxListItem',
    async fetch  (context) {

    },
    components: {
      AxIcon
    },
    props: {
      arrow: {
        default: () => {
          return null
        }
      },
      icon: {
        default: () => {
          return ''
        }
      },
      type: {
        default: () => {
          return ''
        }
      },
      maintext: {
        default: () => {
          return ''
        }
      },
      subtext: {
        default: () => {
          return ''
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
    background: #fff;
    .ax-list-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
      .ax-list-content {
        font-size: 32px;
        flex: 1;
      }
      .ax-list-extra {
        font-size: 25px;
      }
      .ax-list-arrow {
        // height: 25px;
        // width: 25px;
        font-size: 25px;
        color: #cbcbcb;
      }
    }
  }
  
  
  
</style>
