<script setup>
import { useTheme } from 'vuetify'

const vuetifyTheme = useTheme()

const tabData = computed(() => {
  return {
    completion: 15,
    completionString: "15%",
  }
})
</script>

<template>
  <VCard>
    <VCardText class="d-flex align-center justify-center gap-3">
      <VProgressCircular
        size="120"
        width="12"
        :model-value="tabData.completion"
      >
        <span class="text-xs text-medium-emphasis">{{ tabData.completionString }}</span>
      </VProgressCircular>

      <div>
        <h6 class="text-base font-weight-regular">
          <span class="text-capitalize">words completion</span>
        </h6>
        <span class="text-sm text-disabled">many a Little Makes a mickle</span>
      </div>
    </VCardText>
  </VCard>
</template>
