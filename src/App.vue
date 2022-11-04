<template>
  <RouterView v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" ></component>
    </transition>
  </RouterView>
</template>

<style>
  .slide-enter-active,
  .slide-leave-active {
    transition: opacity .75s;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }
</style>
