<script setup>

  import { useCoinStore } from "@/stores/coin";
  import { storeToRefs } from "pinia";

  const store = useCoinStore();
  const { coins } = storeToRefs(store);

</script>

<template>
  <nav>
    <ul class="grid grid-cols-5 gap-1">
      <li v-for="coin in coins" :key="coin.id" class="font-poppins font-medium text-md text-white text-center p-2 border-none bg-secondary rounded-md uppercase">
        <RouterLink active-class="text-primary-100" :to="{name: 'detailed', params: {id: coin.id}}">{{coin.symbol}}</RouterLink>   
    </li>
    </ul>
    <p class="text-sm text-right font-bold">Powered by <a href="#">CoinGecko</a></p>
  </nav>
</template>
