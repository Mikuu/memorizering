<script setup>
// eslint-disable-next-line vue/no-dupe-keys
import wordTime from "@/utils/word-time"
import page1 from '@images/pages/1.png'
import page2 from '@images/pages/2.png'
import page3 from '@images/pages/3.png'
import page5 from '@images/pages/5.jpg'
import page6 from '@images/pages/6.jpg'

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1)

const props = defineProps({ words: Array, wordTime: String })

const image = computed(() => {
  if (props.wordTime === wordTime.T0) {
    return page1
  }

  if (props.wordTime === wordTime.T1) {
    return page2
  }

  if (props.wordTime === wordTime.T2) {
    return page3
  }

  if (props.wordTime === wordTime.T3) {
    return page5
  }

  if (props.wordTime === wordTime.CrossDays) {
    return page6
  }

})
</script>

<template>
  <VRow>
    <VCol sm="4" cols="12" v-for="word in props.words" :key="word.wid">
      <VCard>
        <div class="d-flex flex-column-reverse flex-md-row">
          <div>
            <VCardItem>
              <VCardTitle>{{ capitalizeFirstLetter(word.word) }}</VCardTitle>
            </VCardItem>

            <VCardText class="d-flex align-center flex-wrap text-body-1">
              <VRating
                :model-value="word.difficulty"
                readonly
                class="me-3"
                density="compact"
              />
              <span>{{ word.pronunciation }} | {{ word.chinese }}</span>
            </VCardText>

            <VCardText>
              Example: {{ word.exampleSentence }}
            </VCardText>
          </div>

          <div class="ma-auto pa-5">
            <VImg
              :width="176"
              :src="image"
              class="rounded"
            />
          </div>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.avatar-center {
  position: absolute;
  border: 3px solid rgb(var(--v-theme-surface));
  inset-block-start: -2rem;
  inset-inline-start: 1rem;
}

// membership pricing
.member-pricing-bg {
  position: relative;
  background-color: rgba(var(--v-theme-on-surface), var(--v-hover-opacity));
}

.membership-pricing {
  sup {
    inset-block-start: 9px;
  }
}
</style>
