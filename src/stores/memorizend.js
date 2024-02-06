import { defineStore } from 'pinia'
import * as memorizendClient from "@/clients/memorizend-client"

const apiCaller = (caller, succeedHandler, failedHandler) => {
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
    wordsT0Completed: null,

    wordsT1: [],
    wordsT1Completed: null,

    wordsT2: [],
    wordsT2Completed: null,

    wordsT3: [],
    wordsT3Completed: null,

    wordsCrossDays: [],
    wordsCrossDaysCompleted: null,
  }),

  getters: {},

  actions: {

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
        this.wordsT0Completed = true
      }

      const caller = async () => {
        await memorizendClient.completeWordsT0(this.wordsT0.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT1(failedHandler=null) {
      const onSucceed = () => {
        this.wordsT1Completed = true
      }

      const caller = async () => {
        await memorizendClient.completeWordsT1(this.wordsT1.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT2(failedHandler=null) {
      const onSucceed = () => {
        this.wordsT2Completed = true
      }

      const caller = async () => {
        await memorizendClient.completeWordsT2(this.wordsT2.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsT3(failedHandler=null) {
      const onSucceed = () => {
        this.wordsT3Completed = true
      }

      const caller = async () => {
        await memorizendClient.completeWordsT3(this.wordsT3.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

    completeWordsCrossDays(failedHandler=null) {
      const onSucceed = () => {
        this.wordsCrossDaysCompleted = true
      }

      const caller = async () => {
        await memorizendClient.completeWordsCrossDays(this.wordsCrossDays.map(word => word.wid))
      }

      apiCaller(caller, onSucceed, failedHandler)
    },

  },
})
