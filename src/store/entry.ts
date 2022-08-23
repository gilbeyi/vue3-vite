import { defineStore } from 'pinia'

import { EntryInformation } from '@/types'

export const useEntryStore = defineStore({
  id:'entry',
  state:() => ({
    entryInfo: [] as EntryInformation[]
  }),
  actions: {
    addInfo(info: EntryInformation) {
      this.entryInfo.push(info)
    } 
  }
})
