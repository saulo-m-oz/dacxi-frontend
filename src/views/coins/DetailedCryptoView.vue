<script setup>
  import Navbar from "@/components/common/Navbar.vue";
  import Container from "@/components/common/Container.vue";
</script>

<template>
  <Container class="bg-coins bg-cover">
    <div class="lg:max-w-[1200px] mx-auto">
      <header class="flex flex-col gap-3 lg:py-5 mb-10">
        <RouterLink :to="{name: 'explore'}" class="font-bold text-white">Return</RouterLink>
        <Navbar />
      </header>
      <RouterView v-slot="{ Component }">
        <transition name="left">
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </div>
  </Container>
</template>

<style>
.left-enter-active,
.left-leave-active {
  transition: opacity 1s, transform 0.5s;
}
.left-enter-from,
.left-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>
