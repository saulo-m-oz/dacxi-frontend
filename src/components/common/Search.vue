<script setup>

  import { ref } from "vue";
  import { useCoinStore } from "@/stores/coin";
  import { storeToRefs } from "pinia";

  const input = ref("");
  const store = useCoinStore();
  const { error } = storeToRefs(store);

  const handleSubmit = () => {
    store.fetchCoinPrice(input.value);
    input.value = "";
  };
  
</script>

<template>
  <form class="lg:p-5" @submit.prevent="handleSubmit">
    <input
      class="w-full p-3 rounded-lg bg-gray-300"
      v-model="input"
      type="search"
      placeholder="Search by name"
    />
    <span v-if="error"
      >An error has occured. Try searching by name like "ETHEREUM"</span
    >
  </form>
</template>
