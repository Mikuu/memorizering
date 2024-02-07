<script setup>
import { onMounted } from "vue"
import CardWord from "@/views/pages/cards/card-basic/CardWord.vue"
import TimewordBanner from "@/views/pages/mmr-timeword/TimewordBanner.vue"
import wordTime from "@/utils/word-time"
import { useMemorizendStore } from "@/stores/memorizend"

const memorizendStore = useMemorizendStore()

onMounted(() => {
  memorizendStore.enableCompleteButton()
  memorizendStore.retrieveWordsT1()
})
</script>

<template>
  <div>
    <TimewordBanner
      :words="memorizendStore.wordsT1"
      :word-time="wordTime.T1"
    />
    <CardWord
      :words="memorizendStore.wordsT1"
      :word-time="wordTime.T1"
    />
  </div>
</template>
