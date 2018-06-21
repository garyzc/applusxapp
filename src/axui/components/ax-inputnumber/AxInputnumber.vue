<template>
  <span class="ax-inputnumber" :class="['ax-button-type-'+type,'ax-button-size-'+type,{'ax-button-fit':fit != null},{'ax-inputnumber-disable':isDisabled}]">
    <span class="ax-inputnumber-btn ax-inputnumber-reduce" @click="reduce" :class="classReduce">-</span>
    <input type="text" :value="value" class="ax-inputnumber-input" :disabled="isDisabled" @keyup="input"  />
    <span class="ax-inputnumber-btn ax-inputnumber-add" @click="add" :class="classAdd">+</span>
  </span>
</template>
<script>
  export default {
    name: 'AxInputnumber',
    async fetch  (context) {

    },
    model: {
      prop: 'value',
      event: 'input'
    },
    props: {
      value: null,
      size: {
        default: () => {
          return 'small'
        }
      },
      fit: {
        default: null
      },
      min: null,
      max: null,
      disable: null,
      type: null,
      step: {
        default:1,
      }
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
      classReduce: function() {
        return [{'ax-inputnumber-btn-disable': (this.min != null && this.value <= this.min ) }]
      },
      classAdd: function() {
        return [{'ax-inputnumber-btn-disable': (this.max != null && this.value >= this.max ) }]
      },
      isDisabled: function() {
        if(this.disable === true) {
          return true
        } else if(this.disable === ''){
          return true
        } else  {
          return false
        }
      }
    },
    methods: {
      reduce() {
        if(this.isDisabled) return false

        if(this.min != null) {
          if(this.value > this.min) {
            this.$emit('change', this.value - this.step)
          }
        } else {
          this.$emit('change', this.value - this.step)
        }
      },
      add() {
        if(this.isDisabled) return false

        if(this.max != null) {
          if(this.value > this.max) {
            this.$emit('change', this.value + this.step)
          }
        } else {
          this.$emit('change', this.value + this.step )
        }
      },
      input(e) {
        //正整数
        //replace(/\D/g,'')
        //正数、小数
        //replace(/[^\d.]/g,'')
        //正数、小数、负数
        //replace(/[^\-?\d.]/g,'')
        let v = e.target.value
        v = v.replace(/\D/g,'')
        this.$emit('change', v )
      }
    }

  }
</script>

<style lang="scss" >

  .ax-inputnumber {
    display: inline-flex;
    align-items: center;
    input {
      width: 80px;
      height: 40px;
      background: $Gray-4;
      border: none;
      color: $FontTitle;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .ax-inputnumber-btn {
      width: 40px;
      height: 40px;
      display: inline-block;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
    }
    .ax-inputnumber-btn-disable {
      color: $FontDisable;
    }
  }
  .ax-inputnumber-disable {
    input {
      color: $FontDisable;
    }
    .ax-inputnumber-btn {
      color: $FontDisable;
    }
  }
  
  
</style>
