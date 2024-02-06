<script setup>
import { onMounted } from "vue"
import CardWord from "@/views/pages/cards/card-basic/CardWord.vue"
import TimewordBanner from "@/views/pages/mmr-timeword/TimewordBanner.vue"
import wordTime from "@/utils/word-time"
import { useMemorizendStore } from "@/stores/memorizend"

const memorizendStore = useMemorizendStore()

onMounted(() => {
  memorizendStore.retrieveWordsT3()
})
</script>

<template>
  <div>
    <TimewordBanner :word-time="wordTime.T3" />
    <CardWord
      :words="memorizendStore.wordsT3"
      :word-time="wordTime.T3"
    />
  </div>
</template>
