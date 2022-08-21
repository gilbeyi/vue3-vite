<template>
  <div class="wrapper">
    <VText
      :modelValue="entryInfo.name"
      class="text"
      @update:modelValue="update"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'

import VText from '@/components/atoms/VText.vue'

import { EntryInformation } from '@/types'

export default defineComponent({
  components: {
    VText
  },
  props: {
    entryInfo: {
      type: Object as PropType<EntryInformation>,
      default: {}
    }
  },
  setup(props, context) {
    const update = (value: string) => {
      const info = { ...props.entryInfo }
      info.name = value
      context.emit('update:entryInfo', info)
    }

    return {
      update
    }
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100px;
}
.text {
  width: 300px;
}
</style>
