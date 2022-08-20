<template>
  <div>
    <VText
      v-model="state.value"
      class="text"
    />
    <div class="button-block">
      <VButton
        class="buton"
        @click="click"
      >
        confirm
      </VButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import VText from '@/components/atoms/VText.vue'
import VButton from '@/components/atoms/VButton.vue'

export default defineComponent({
  components: {
    VText,
    VButton
  },
  setup() {
    const state = reactive({
      value: ''
    })
    const click = () => {
      alert('hello')
    }

    return {
      state,
      click
    }
  },
})
</script>

<style lang="scss" scoped>
.text {
  width: 300px;
}
.button-block {
  padding: 20px 0;
}
.buton {
  width: 100px;
}
</style>
