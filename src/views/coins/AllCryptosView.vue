<script setup>
  import { useCoinStore } from "@/stores/coin";
  import { storeToRefs } from "pinia";
  import Container from "../../components/common/Container.vue";
  import { onBeforeUnmount } from "vue";

  const store = useCoinStore();
  const { coins, allCoinsData, isLoadingAllCoins } = storeToRefs(store);

  const timer = setInterval(store.fetchAllCoins, 1000);

  onBeforeUnmount(() =>{
    clearInterval(timer);
  })

</script>

<template>
  <Container class="bg-coins bg-cover overflow-y-scroll">
    <main class="h-full max-w-[900px] mx-auto ">
      <ul
        class="h-[90%] font-bold text-white grid grid-cols-2 lg:p-5 lg:grid-cols-3 gap-3 animate-enterInUp"
      >
        <RouterLink
          v-for="coin in coins"
          :key="coin.id"
          :to="{name: 'detailed', params: {id: coin.id}}"
          class="flex flex-col items-center justify-center rounded-md shadow-lg bg-ethereum bg-cover hover:scale-105 transition-transform"
          :class="{ 'col-span-2 lg:col-span-3' : coin.id == 'bitcoin' }"
        >
          <h2 class="font-extrabold text-2xl lg:text-3xl text-white drop-shadow-md mb-2 uppercase">{{ coin.name }}</h2>
          <p class="font-extrabold text-lg text-white drop-shadow-sm uppercase">({{ coin.symbol }})</p>
          <p v-if="isLoadingAllCoins">US$ --</p>
          <p v-else>US$ {{allCoinsData[coin.id].usd}}</p>
        </RouterLink>
      </ul>
      <RouterView />
    </main>
  </Container>
</template>

<style></style>
