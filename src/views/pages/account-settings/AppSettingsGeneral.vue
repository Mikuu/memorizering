<script setup>
// eslint-disable-next-line import/namespace
import { useMemorizendStore } from "@/stores/memorizend"
import { onMounted } from "vue"

const memorizendStore = useMemorizendStore()

onMounted(() => {
  memorizendStore.retrieveConfig()
})
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VCard title="Account Details">
        <VCardText>
          <VForm class="mt-6">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="memorizendStore.config.wordsPerDay"
                  placeholder="2"
                  label="Words per day"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="memorizendStore.config.t0shiftTime"
                  placeholder="0"
                  label="T0 time (no shift)"
                  disabled
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="memorizendStore.config.t1shiftTime"
                  placeholder="5"
                  label="T1 time shifting from T0 (minutes)"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="memorizendStore.config.t2shiftTime"
                  placeholder="30"
                  label="T2 time shifting from T0 (minutes)"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="memorizendStore.config.t3shiftTime"
                  placeholder="12"
                  label="T3 time shifting from T0 (hours)"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="memorizendStore.config.t4shiftTime"
                  placeholder="1,2,4,7,15"
                  label="T4 time shifting from T0 (days)"
                />
              </VCol>

              <VCol
                cols="12"
                class="d-flex flex-wrap gap-4"
              >
                <VBtn @click="memorizendStore.updateConfig">
                  Save changes
                </VBtn>

                <VBtn
                  color="secondary"
                  variant="tonal"
                  type="reset"
                  @click.prevent="memorizendStore.retrieveConfig"
                >
                  Reset
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>

  </VRow>
</template>
