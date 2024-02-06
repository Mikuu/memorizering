<script setup>
import { useMemorizendStore } from "@/stores/memorizend"
// eslint-disable-next-line vue/no-dupe-keys
import wordTime from "@/utils/word-time"

const props = defineProps({ wordTime: String })
const memorizendStore = useMemorizendStore()

const onClickComplete = () => {
  const completeMethods = {
    [wordTime.T0]: 'completeWordsT0',
    [wordTime.T1]: 'completeWordsT1',
    [wordTime.T2]: 'completeWordsT2',
    [wordTime.T3]: 'completeWordsT3',
    [wordTime.CrossDays]: 'completeWordsCrossDays',
  }

  const completeMethod = completeMethods[props.wordTime]

  memorizendStore[completeMethod]()
}
</script>

<template>
  <div>
    <div class="d-flex justify-space-between">
      <p class="text-2xl mb-6">
        Happy memorizing
      </p>
      <VBtn @click="onClickComplete">Complete</VBtn>
    </div>
  </div>
</template>
