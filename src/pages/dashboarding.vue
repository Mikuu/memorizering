<script setup>
import MMAnalyticsCongratulations from '@/views/dashboard/MMAnalyticsCongratulations.vue'
import MMAnalyticsFinanceTabs from '@/views/dashboard/MMAnalyticsFinanceTab.vue'
import MMAnalyticsCompletion from "@/views/dashboard/MMAnalyticsCompletion.vue"

// import AnalyticsOrderStatistics from '@/views/dashboard/AnalyticsOrderStatistics.vue'
// import AnalyticsProfitReport from '@/views/dashboard/AnalyticsProfitReport.vue'
// import AnalyticsTotalRevenue from '@/views/dashboard/AnalyticsTotalRevenue.vue'
// import AnalyticsTransactions from '@/views/dashboard/AnalyticsTransactions.vue'

// 👉 Images
import chart from '@images/cards/chart-success.png'
import card from '@images/cards/credit-card-primary.png'
import paypal from '@images/cards/paypal-error.png'
import wallet from '@images/cards/wallet-info.png'
</script>

<template>
  <VRow>
    <!-- 👉 Congratulations -->
    <VCol
      cols="12"
      md="8"
    >
      <MMAnalyticsCongratulations />
    </VCol>

    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      sm="4" -->
    <!--    > -->
    <!--      <VRow> -->
    <!--        &lt;!&ndash; 👉 Profit &ndash;&gt; -->
    <!--        <VCol -->
    <!--          cols="12" -->
    <!--          md="6" -->
    <!--        > -->
    <!--          <CardStatisticsVertical -->
    <!--            v-bind="{ -->
    <!--              title: 'Profit', -->
    <!--              image: chart, -->
    <!--              stats: '$12,628', -->
    <!--              change: 72.80, -->
    <!--            }" -->
    <!--          /> -->
    <!--        </VCol> -->

    <!--        &lt;!&ndash; 👉 Sales &ndash;&gt; -->
    <!--        <VCol -->
    <!--          cols="12" -->
    <!--          md="6" -->
    <!--        > -->
    <!--          <CardStatisticsVertical -->
    <!--            v-bind="{ -->
    <!--              title: 'Sales', -->
    <!--              image: wallet, -->
    <!--              stats: '$4,679', -->
    <!--              change: 28.42, -->
    <!--            }" -->
    <!--          /> -->
    <!--        </VCol> -->
    <!--      </VRow> -->
    <!--    </VCol> -->

    <!-- 👉 Total Revenue -->
    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      md="8" -->
    <!--      order="2" -->
    <!--      order-md="1" -->
    <!--    > -->
    <!--      <AnalyticsTotalRevenue /> -->
    <!--    </VCol> -->

    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      sm="8" -->
    <!--      md="4" -->
    <!--      order="1" -->
    <!--      order-md="2" -->
    <!--    > -->
    <!--      <VRow> -->
    <!--        &lt;!&ndash; 👉 Payments &ndash;&gt; -->
    <!--        <VCol -->
    <!--          cols="12" -->
    <!--          sm="6" -->
    <!--        > -->
    <!--          <CardStatisticsVertical -->
    <!--            v-bind=" { -->
    <!--              title: 'Payments', -->
    <!--              image: paypal, -->
    <!--              stats: '$2,468', -->
    <!--              change: -14.82, -->
    <!--            }" -->
    <!--          /> -->
    <!--        </VCol> -->

    <!--        &lt;!&ndash; 👉 Revenue &ndash;&gt; -->
    <!--        <VCol -->
    <!--          cols="12" -->
    <!--          sm="6" -->
    <!--        > -->
    <!--          <CardStatisticsVertical -->
    <!--            v-bind="{ -->
    <!--              title: 'Transactions', -->
    <!--              image: card, -->
    <!--              stats: '$14,857', -->
    <!--              change: 28.14, -->
    <!--            }" -->
    <!--          /> -->
    <!--        </VCol> -->
    <!--      </VRow> -->

    <!--      <VRow> -->
    <!--        &lt;!&ndash; 👉 Profit Report &ndash;&gt; -->
    <!--        <VCol -->
    <!--          cols="12" -->
    <!--          sm="12" -->
    <!--        > -->
    <!--          <AnalyticsProfitReport /> -->
    <!--        </VCol> -->
    <!--      </VRow> -->
    <!--    </VCol> -->

    <!-- 👉 Order Statistics -->
    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      md="4" -->
    <!--      sm="6" -->
    <!--      order="3" -->
    <!--    > -->
    <!--      <AnalyticsOrderStatistics /> -->
    <!--    </VCol> -->

    <!-- 👉 Tabs chart -->
    <VCol
      cols="12"
      md="8"
      sm="6"
      order="3"
    >
      <MMAnalyticsFinanceTabs />
    </VCol>

    <VCol
      cols="12"
      md="4"
      sm="6"
      order="3"
    >
      <MMAnalyticsCompletion />
    </VCol>

    <!-- 👉 Transactions -->
    <!--    <VCol -->
    <!--      cols="12" -->
    <!--      md="4" -->
    <!--      sm="6" -->
    <!--      order="3" -->
    <!--    > -->
    <!--      <AnalyticsTransactions /> -->
    <!--    </VCol> -->
  </VRow>
</template>
