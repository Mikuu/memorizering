<script setup>
import { useTheme } from 'vuetify'
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import upgradeBannerDark from '@images/pro/upgrade-banner-dark.png'
import upgradeBannerLight from '@images/pro/upgrade-banner-light.png'
import VerticalNavLayout from '@layouts/components/VerticalNavLayout.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

// Components
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'

import { useMemorizendStore } from "@/stores/memorizend"

const memorizendStore = useMemorizendStore()

const vuetifyTheme = useTheme()

const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar="{ toggleVerticalOverlayNavActive }">
      <div class="d-flex h-100 align-center">
        <!-- 👉 Vertical nav toggle in overlay mode -->
        <IconBtn
          class="ms-n3 d-lg-none"
          @click="toggleVerticalOverlayNavActive(true)"
        >
          <VIcon icon="bx-menu" />
        </IconBtn>

        <!-- 👉 Search -->
        <!--        <div -->
        <!--          class="d-flex align-center cursor-pointer" -->
        <!--          style="user-select: none;" -->
        <!--        > -->
        <!--          &lt;!&ndash; 👉 Search Trigger button &ndash;&gt; -->
        <!--          <IconBtn> -->
        <!--            <VIcon icon="bx-search" /> -->
        <!--          </IconBtn> -->

        <!--          <span class="d-none d-md-flex align-center text-disabled"> -->
        <!--            <span class="me-3">Search</span> -->
        <!--            <span class="meta-key">&#8984;K</span> -->
        <!--          </span> -->
        <!--        </div> -->

        <!-- 👉 Just a label -->
        <div
          class="d-flex align-center cursor-pointer"
          style="user-select: none;"
        >
          <!-- 👉 Search Trigger button -->
          <IconBtn>
            <VIcon icon="mdi-emoticon-wink-outline" />
          </IconBtn>

          <span class="d-none d-md-flex align-center text-disabled">
            <span class="me-3">Happy memorizering</span>
          </span>
        </div>

        <VSpacer />

        <!--        <IconBtn -->
        <!--          class="me-2" -->
        <!--          href="https://github.com/themeselection/sneat-vuetify-vuejs-admin-template-free" -->
        <!--          target="_blank" -->
        <!--          rel="noopener noreferrer" -->
        <!--        > -->
        <!--          <VIcon icon="bxl-github" /> -->
        <!--        </IconBtn> -->

        <!--        <IconBtn class="me-2"> -->
        <!--          <VIcon icon="bx-bell" /> -->
        <!--        </IconBtn> -->

        <NavbarThemeSwitcher class="me-2" />

        <!--        <UserProfile /> -->
      </div>
    </template>

    <template #vertical-nav-content>
      <VerticalNavLink
        :item="{
          title: 'Dashboard',
          icon: 'mdi-view-dashboard',
          to: '/dashboard',
        }"
      />

      <VerticalNavLink
        :item="{
          title: 'Settings',
          icon: 'mdi-account-cog-outline',
          to: '/account-settings',
        }"
      />

      <!-- 👉 Pages -->
      <VerticalNavSectionTitle
        :item="{
          heading: 'Memory Times',
        }"
      />
      <VerticalNavLink
        :item="{
          title: `Time - T0 + ${memorizendStore.config.t0shiftTime}`,
          icon: 'mdi-clock-time-eight-outline',
          to: '/timeword-t0',
        }"
      />
      <VerticalNavLink
        :item="{
          title: `Time - T1 + ${memorizendStore.config.t1shiftTime} minutes`,
          icon: 'mdi-clock-time-nine-outline',
          to: '/timeword-t1',
        }"
      />
      <VerticalNavLink
        :item="{
          title: `Time - T2 + ${memorizendStore.config.t2shiftTime} minutes`,
          icon: 'mdi-clock-time-one-outline',
          to: '/timeword-t2',
        }"
      />
      <VerticalNavLink
        :item="{
          title: `Time - T3 + ${memorizendStore.config.t3shiftTime} hours`,
          icon: 'mdi-clock-time-five-outline',
          to: '/timeword-t3',
        }"
      />
      <VerticalNavLink
        :item="{
          title: 'Time - Cross days',
          icon: 'mdi-home-clock-outline',
          to: '/timeword-crossDays',
        }"
      />
    </template>
    <slot />
  </VerticalNavLayout>
</template>

<style lang="scss" scoped>
.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 6px;
  block-size: 1.5625rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}
</style>
