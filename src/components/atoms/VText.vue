<template>
  <input
    type="text"
    :value="modelValue"
    :alt="alt"
    :disabled="disabled"
    :placeholder="placeholder"
    class="input"
    @input="update"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    modelValue: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  setup(_props, context) {
    const update = (e: Event) => {
      if (!(e.target instanceof HTMLInputElement)) return
      context.emit('update:modelValue', e?.target?.value ?? '')
    }
    return {
      update
    }
  }
})
</script>

<style lang="scss" scoped>
.input {
  padding: 8px;
  border: 1px solid #CCC;
  border-radius: 3px;
  &:focus {
    outline: none;
  }
}
</style>
