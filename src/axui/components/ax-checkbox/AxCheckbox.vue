<template>
  <label class="ax-checkbox-wrapper" >
    <span class="ax-checkbox" :class="[{'ax-checkbox-checked':checked}]">
      <span class="ax-checkbox-inner">
        <span></span>
      </span>
      <input type="checkbox" class="ax-checkbox-input" v-bind:checked="checked" v-on:change="$emit('change', $event.target.checked)" />
    </span>
    <slot></slot>
  </label>
</template>
<script>
  export default {
    name: 'AxCheckbox',
    async fetch  (context) {

    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: {
        default: false
      },
      type: {
        default: () => {
          return 'default'
        }
      },
      size: {
        default: () => {
          return 'small'
        }
      },
      fit: {
        default: null
      },
      onChange: {
        default: (value) => {
          
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
      checkedComputed: {
        get () {
          return this.checked
        },
        set (value) {
          this.onChange(value)
        }
      }
    },
    methods: {
    }

  }
</script>

<style lang="scss" >

  .ax-checkbox-wrapper {
    font-size: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .ax-checkbox {
      position: relative;
      width: 45px;
      height: 45px;
      display: inline-block;
      margin-right: 20px;
      .ax-checkbox-input {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0;
      }
      .ax-checkbox-inner {
        display: inline-block;
        position: absolute;
        right: 0;
        width: 45px;
        height: 45px;
        border: 1px solid #ccc;
        border-radius: 50%;
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        span {
          position: absolute;
          display: none;
          top: 5px;
          right: 13px;
          z-index: 999;
          width: 10px;
          height: 25px;
          border-style: solid;
          border-width: 0 1px 1px 0;
          content: " ";
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }
    .ax-checkbox-checked {
      .ax-checkbox-inner {
        border-color: $Primary;
        background: $Primary;
        span {
          display: block;
          border-color: $White;
        }
      }
      
    }

  }
  
  
</style>
