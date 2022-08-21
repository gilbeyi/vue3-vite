<template>
  <div class="wrapper">
    <div class="text">
      {{ name }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue'

import { EntryInformation } from '@/types'

export default defineComponent({
  props: {
    entryInfo: {
      type: Object as PropType<EntryInformation>,
      default: {}
    }
  },
  setup(props, context) {
    const name = computed(() => {
      return props.entryInfo?.name ?? ''
    })

    const update = (value: string) => {
      const info = { ...props.entryInfo }
      info.name = value
      context.emit('update:entryInfo', info)
    }

    return {
      name,
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
  text-align: left;
  font-size: 14px;
}
</style>
