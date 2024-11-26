<script>
export default {
  name: 'CodeInput',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    maxlength: {
      type: Number,
      default: 18,
    },
    // 是否自动获取焦点
    focus: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['change', 'input', 'update:modelValue', 'finish'],
  data() {
    return {
      inputValue: '',
      isFocus: this.focus,
      inputOption: {
        oninput: `if(value.length>${this.maxlength})value=value.slice(0,${this.maxlength})`,
      },
    };
  },
  computed: {
    // 根据长度，循环输入框的个数，因为头条小程序数值不能用于v-for
    codeLength() {
      return Array.from({ length: Number(this.maxlength) });
    },
    // 将输入的值，转为数组，给item历遍时，根据当前的索引显示数组的元素
    codeArray() {
      return String(this.inputValue).split('');
    },
  },
  watch: {
    value(newVal) {
      // 转为字符串，超出部分截掉
      this.inputValue = String(newVal).substring(0, this.maxlength);
    },
    modelValue(newVal) {
      // 转为字符串，超出部分截掉
      this.inputValue = String(newVal).substring(0, this.maxlength);
    },
  },
  created() {
    const value = String(this.value) || String(this.modelValue);
    this.inputValue = String(value).substring(0, this.maxlength);
  },
  methods: {
    // 监听输入框的值发生变化
    inputHandler(e) {
      const value = e.target.value;
      this.inputValue = value;
      // 未达到maxlength之前，发送change事件，达到后发送finish事件
      this.$emit('change', value);
      // 修改通过v-model双向绑定的值
      this.$emit('input', value);
      this.$emit('update:modelValue', value);
      // 达到用户指定输入长度时，发出完成事件
      if (String(value).length >= Number(this.maxlength)) this.$emit('finish', value);
    },
  },
};
</script>

<template>
  <div class="code-input">
    <div class="code-input-box">
      <template v-for="(item, index) in codeLength" :key="index">
        <div class="code-input-item">
          <span>{{ codeArray[index] }}</span>
          <div v-if="isFocus && codeArray.length === index" class="code-input-item__cursor" />
        </div>
      </template>
    </div>
    <input
      :value="inputValue"
      :disabled="false"
      type="number"
      :focus="focus"
      :maxlength="maxlength"
      v-bind="inputOption"
      class="code-input__input"
      @input="inputHandler"
      @focus="isFocus = true"
      @blur="isFocus = false"
    />
  </div>
</template>

<style lang="scss" scoped>
.code-input {
  position: relative;
  overflow: hidden;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;

  .code-input-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    min-width: 40px;
    height: 40px;
    border-radius: 5px;
    font-size: 16px;
    color: #606266;
    border: 1px solid #c9cacc;
    margin-right: 10px;

    &:nth-child(6n) {
      margin-right: 40px;
    }

    &:last-child {
      margin-right: 0;
    }

    &__cursor {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 50%;
      animation: 1s cursor-flicker infinite;
      background-color: #606266;
    }
  }

  &__input {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    background-color: transparent;
    text-align: left;
    height: 40px;
    line-height: 1;
    outline: none;
    opacity: 0;

    /* 隐藏 input 中的上下箭头 */
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox 特殊处理 */
    &[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
}

@keyframes cursor-flicker {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
