<template>
  <div>
    <EntryInput
      v-if="isEntry"
      v-model:entryInfo="state.entryInfo"
    />

    <div class="button-block">
      <VButton
        v-if="isConfirm"
        class="button__back"
        @click="back"
      >
        back
      </VButton>

      <VButton
        class="button"
        @click="click"
      >
        {{ buttonText }}
      </VButton>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

import EntryInput from '@/components/entry/EntryInput.vue'
import VButton from '@/components/atoms/VButton.vue'

import { EntryInformation } from '@/types'
import { ENTRY_STATUS } from '@/values'

export default defineComponent({
  components: {
    EntryInput,
    VButton
  },
  setup() {
    const state = reactive({
      status: ENTRY_STATUS.ENTRY,
      entryInfo: {
        name: ''
      } as EntryInformation
    })

    const isEntry = computed(() => {
      return state.status === ENTRY_STATUS.ENTRY
    })
    const isConfirm = computed(() => {
      return state.status === ENTRY_STATUS.CONFIRM
    })
    const buttonText = computed(() => {
      return state.status === ENTRY_STATUS.ENTRY
        ? 'confirm'
        : 'complete'
    })

    const click = () => {
      switch (state.status) {
        case ENTRY_STATUS.ENTRY:
          state.status = ENTRY_STATUS.CONFIRM
          break
        case ENTRY_STATUS.CONFIRM:
          state.status = ENTRY_STATUS.COMPLETED
          break
      }
    }

    const back = () => {
      state.status = ENTRY_STATUS.ENTRY
    }

    return {
      state,
      isEntry,
      isConfirm,
      buttonText,
      click,
      back
    }
  },
})
</script>

<style lang="scss" scoped>
.button-block {
  padding: 20px 0;
}
.button {
  width: 100px;
  &__back {
    width: 100px;
    margin-right: 10px;
  }
}
</style>
