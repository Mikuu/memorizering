import { defineStore } from 'pinia'
import * as memorizendClient from "@/clients/memorizend-client"

const apiCaller = (caller, succeedHandler=null, failedHandler=null) => {
  caller()
    .then(response => {
      if (succeedHandler) { succeedHandler(response) }
    })
    .catch(reason => {
      console.error(reason)
      if (failedHandler) { failedHandler() }
    })
}

export const useMemorizendStore = defineStore('memorizend', {
  state: () => ({
    wordsT0: [],
    wordsT1: [],
    wordsT2: [],
    wordsT3: [],
    wordsCrossDays: [],
    completeButtonEnabled: null,
  }),

  getters: {},

  actions: {

    enableCompleteButton() {
      this.completeButtonEnabled = true;
    },

    disableCompleteButton() {
      this.completeButtonEnabled = false;
    },

    /**  retrieve methods **/

    retrieveWordsT0(failedHandler=null) {

      const onSucceed = response => {
        this.wordsT0 = response.words
      }

      apiCaller(memorizendClient.getWordsT0, onSucceed, failedHandler)
    },

    retrieveWordsT1(failedHandler=null) {
      const onSucceed = response => {
        this.wordsT1 = response.words
      }

      apiCaller(memorizendClient.getWordsT1, onSucceed, failedHandler)

    },

    retrieveWordsT2(failedHandler=null) {
      const onSucceed = response => {
        this.wordsT2 = response.words
      }

      apiCaller(memorizendClient.getWordsT2, onSucceed, failedHandler)

    },

    retrieveWordsT3(failedHandler=null) {
      const onSucceed = response => {
        this.wordsT3 = response.words
      }

      apiCaller(memorizendClient.getWordsT3, onSucceed, failedHandler)

    },

    retrieveWordsCrossDays(failedHandler=null) {
      const onSucceed = response => {
        this.wordsCrossDays = response.words
      }

      apiCaller(memorizendClient.getWordsCrossDays, onSucceed, failedHandler)
    },

    /**  complete methods **/

    completeWordsT0(failedHandler=null) {
      const onSucceed = () => {
        this.disableCompleteButton()
      }

      const caller = async () => {
        await memorizendClient.completeWordsT0(this.wordsT0.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT1(failedHandler=null) {
      const onSucceed = () => {
        this.disableCompleteButton()
      }

      const caller = async () => {
        await memorizendClient.completeWordsT1(this.wordsT1.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT2(failedHandler=null) {
      const onSucceed = () => {
        this.disableCompleteButton()
      }

      const caller = async () => {
        await memorizendClient.completeWordsT2(this.wordsT2.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT3(failedHandler=null) {
      const onSucceed = () => {
        this.disableCompleteButton()
      }

      const caller = async () => {
        await memorizendClient.completeWordsT3(this.wordsT3.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsCrossDays(failedHandler=null) {
      const onSucceed = () => {
        this.disableCompleteButton()
      }

      const caller = async () => {
        await memorizendClient.completeWordsCrossDays(this.wordsCrossDays.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

  },
})
