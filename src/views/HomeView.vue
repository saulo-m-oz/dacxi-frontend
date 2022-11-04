<script setup>
import Container from "@/components/common/Container.vue";
</script>

<template>
  <Container class="bg-bg bg-cover">
    <main class="h-full grid grid-cols-1 place-content-center gap-4">
      <div class="mx-auto">
        <h1 class="font-bold text-white text-6xl mb-4">
          Welcome to <strong class="text-primary-100">KrypCap</strong>
        </h1>
        <p class="text-white font-medium md:text-3xl animate-enterInUp">
          Your pocket size <strong class="text-primary-100">crypto</strong> app.
        </p>
        <RouterLink
          :to="{ name: 'explore' }"
          class="text-black text-center text-xl font-inter font-bold inline-block bg-white hover:bg-primary-200 hover:text-white transition-colors border-none rounded-lg p-6 w-full mt-5 mb-5 animate-fadeIn"
          >Get Started</RouterLink
        >
      </div>
    </main>
  </Container>
</template>
