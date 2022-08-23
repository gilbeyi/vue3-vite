<template>
  <div>
    <h1 class="title">Vue3 example</h1>

    <EntryInput
      v-if="isEntry"
      v-model:entryInfo="state.entryInfo"
    />
    <EntryConfirm
      v-if="isConfirm"
      :entry-info="state.entryInfo"
    />
    <EntryCompleted
      v-if="isCompleted"
    />

    <div class="button-block">
      <VButton
        v-if="!isEntry"
        class="button__back"
        @click="back"
      >
        back
      </VButton>

      <VButton
        v-if="!isCompleted"
        :disabled="!isValid"
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
import EntryConfirm from '@/components/entry/EntryConfirm.vue'
import EntryCompleted from '@/components/entry/EntryCompleted.vue'
import VButton from '@/components/atoms/VButton.vue'

import { EntryInformation } from '@/types'
import { ENTRY_STATUS } from '@/values'
import { useEntryStore } from '@/store'

export default defineComponent({
  components: {
    EntryInput,
    EntryConfirm,
    EntryCompleted,
    VButton
  },
  setup() {
    const storeEntry = useEntryStore()

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
    const isCompleted = computed(() => {
      return state.status === ENTRY_STATUS.COMPLETED
    })
    const isValid = computed(() => {
      return !!state.entryInfo?.name
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
          addInfo(state.entryInfo)
          state.status = ENTRY_STATUS.COMPLETED
          break
      }
    }

    const addInfo = (info: EntryInformation) => {
      storeEntry.addInfo({...info})
    }

    const back = () => {
      if (state.status === ENTRY_STATUS.COMPLETED) {
        state.entryInfo.name = ''
      }
      state.status = ENTRY_STATUS.ENTRY
    }

    return {
      state,
      isEntry,
      isConfirm,
      isCompleted,
      isValid,
      buttonText,
      click,
      back
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 100px;
}

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
