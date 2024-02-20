<script setup>
import { computed } from "vue"
import { useMemorizendStore } from "@/stores/memorizend"
// eslint-disable-next-line vue/no-dupe-keys
import wordTime from "@/utils/word-time"

const props = defineProps({ wordTime: String, words: Array })
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

const isWordsNotEmpty = computed(() => {
  return Boolean(props.words.length)
})

const isWordsNotEmptyAndCompleted = computed(() => {
  const completedWordTimeOn = {
    [wordTime.T0]: 'startedOn',
    [wordTime.T1]: 'completedM5On',
    [wordTime.T2]: 'completedM30On',
    [wordTime.T3]: 'completedH12On',
  }

  const completedWordTime = completedWordTimeOn[props.wordTime]

  return Boolean(props.words.length && props.words[0][completedWordTime] !== null)
})

const greetingWords = computed(() => {
  const greetings = {
    [wordTime.T0]: 'New words for today',
    [wordTime.T1]: "Review today's words",
    [wordTime.T2]: "Review again",
    [wordTime.T3]: "Review yesterday's words",
    [wordTime.CrossDays]: "Review previous days' words",
  }

  return greetings[props.wordTime]
})
</script>

<template>
  <div>
    <div class="d-flex justify-space-between">
      <p class="text-2xl mb-6">
        {{ greetingWords }}
      </p>
      <VBtn
        v-if="isWordsNotEmpty"
        :disabled="!memorizendStore.completeButtonEnabled || isWordsNotEmptyAndCompleted"
        @click="onClickComplete"
      >
        Complete
      </VBtn>
    </div>
  </div>
</template>
