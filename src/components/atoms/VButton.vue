<template>
  <button
    :disabled="disabled"
    class="button"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss" scoped>
.button {
  height: 36px;
  min-width: 64px;
  padding: 0 16px;
  font-size: 16px;
  color: #666;
  border: 1px solid #999;
  border-radius: 5px;
  background-color: #EEE;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #DDD;
  }
}
</style>
