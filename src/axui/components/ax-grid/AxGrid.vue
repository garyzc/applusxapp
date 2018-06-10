<template>
  <div class="ax-grid">
    <div class="ax-grid-row" v-for="(row,i) in gridRow" :key="i">
      <div class="ax-grid-item" v-for="(item,index) in row" :key="index" :style="{width: itemWidth}">
        <div class="ax-grid-inner">
          <div class="ax-grid-icon">
            <img :src="item.icon" />
          </div>
          <div class="ax-grid-text">
            {{item.text}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AxGrid',
    async fetch  (context) {

    },
    props: {
      data: {
        default: () => {
          return []
        }
      },
      colnums: {
        default: () => {
          return 4
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
      itemWidth: function() {
        return 100/this.colnums + '%'
      },
      gridRow:function(){
        let index = 1
        let trans = []
        let row_array = []
        // alert(this.data.length)
        for(let item of this.data) {
          console.log(index%this.colnums)
          row_array.push(item)
          if(index%this.colnums == 0) {
            trans.push(row_array)
            row_array = []
          }
          index++
        }
        trans.push(row_array)
        return trans
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-grid {
    width: 100%;
    .ax-grid-row {
      display: flex;
      .ax-grid-item {
        // flex: 1;
        display: inline-flex;
        justify-content: center;
        .ax-grid-inner {
          display: inline-flex;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          align-items: center;
          .ax-grid-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 20px;
            img {
              width: 100%;
            }
          }
          .ax-grid-text {
            color: $ui_color_text_1;
            font-size: 26px;
          }
        }
      }
    }
  }
  
  
</style>
