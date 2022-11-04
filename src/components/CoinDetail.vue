<script setup>
import { useRoute } from "vue-router";
import { onBeforeUnmount, ref, watch } from "vue";
import { useCoinStore } from "../stores/coin";
import { storeToRefs } from "pinia";
import { useFormatDate } from "@/composables/dateFormat";

const route = useRoute();
const store = useCoinStore();
const {
  isLoadingCoin,
  errorCoin,
  errorCoinDate,
  isLoadingDateCoin,
  coinData,
  coinDataByDate,
} = storeToRefs(store);

const date = ref("");
const searchDate = ref("");
const { dateFormat } = useFormatDate();

// FETCH COIN WHEN MOUNTED TO DOM
const timer = setInterval(() => store.fetchCoinPrice(route.params.id), 1000);

store.fetchCoinPrice(route.params.id);

//KEEP WATCHING FOR CHANGES ON ID SO IT CAN FETCH NEW DATA
watch(
  () => route.params.id,
  () => {
    store.isLoadingCoin = true;
    errorCoin.value = null;
    errorCoinDate.value = null;
    store.fetchCoinPrice(route.params.id);
  }
);

onBeforeUnmount(() => {
  clearInterval(timer);
  errorCoin.value = null;
  store.isLoadingCoin = true;
  errorCoin.value = null;
  errorCoinDate.value = null;
});

function handleSubmit() {
  const newDate = dateFormat(date.value);
  searchDate.value = newDate;
  date.value = "";
  store.fetchCoinPriceByDate(route.params.id, newDate);
}
</script>

<template>
  <div
    class="font-extrabold text-4xl text-white drop-shadow-md mb-2 uppercase p-5"
    v-if="isLoadingCoin"
  >
    LOADING...
  </div>
  <div
    class="font-extrabold text-4xl text-white drop-shadow-md mb-2 uppercase p-5"
    v-else-if="errorCoin"
  >
    There was an error. Please reload the page.
  </div>
  <main
    v-else
    class="flex flex-col gap-3 p-3 lg:p-5 font-poppins border-2 border-primary-100 rounded-xl"
  >
    <div class="flex flex-col gap-2 pb-2 border-b-2 border-secondary shadow-xs">
      <h1 class="font-extrabold text-4xl text-white drop-shadow-md uppercase">
        {{ coinData.name }} ({{ coinData.symbol }})
      </h1>
      <h2 class="font-extrabold text-2xl text-white drop-shadow-sm uppercase">
        US$ {{ coinData.market_data.current_price.usd }}
      </h2>
      <div class="flex lg:justify-end gap-3 text-xs font-bold text-secondary">
        <span>Min. 24H: US$ {{ coinData.market_data.low_24h.usd }}</span>
        <span>Max. 24H: US$ {{ coinData.market_data.high_24h.usd }}</span>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <h3 class="font-extrabold text-2xl text-white drop-shadow-sm uppercase">
        {{ coinData.name }} Price by Date
      </h3>
      <form @submit.prevent="handleSubmit">
        <input
          class="p-3 rounded-lg bg-gray-300"
          type="date"
          placeholder="dd-mm-yyyy"
          v-model="date"
        />
        <button class="ml-1 p-3 rounded-lg text-white bg-secondary">
          Search
        </button>
      </form>
    </div>
    <div
      class="font-extrabold text-xl text-secondary drop-shadow-sm uppercase"
      v-if="isLoadingDateCoin"
    >
      LOADING DATE COIN...
    </div>
    <div v-else>
      <p
        class="font-extrabold text-lg text-white drop-shadow-sm uppercase"
        v-if="coinDataByDate > 0"
      >
        Price on {{ searchDate }}: US$ {{ coinDataByDate }}
      </p>
      <p
        class="font-extrabold text-xl text-white drop-shadow-sm uppercase"
        v-if="errorCoinDate"
      >
        {{ errorCoinDate }}
      </p>
    </div>
  </main>
</template>
