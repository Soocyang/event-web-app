<template>
  <NuxtLoadingIndicator color="#591ae0" />
  <header class="sm:sticky top-0 z-10 w-full backdrop-blur shadow-lg bg-white/95">
    <nav class="max-w-5xl m-auto px-7 h-12 sm:h-16 flex items-center justify-center sm:justify-between">
      <nuxt-link to="/" class="flex items-center justify-center">
        <img src="/favicon.ico" alt="logo icon" class="sm:w-7 w-6 mx-1">
        <span class="font-semibold text-gradient-primary sm:text-2xl text-xl">Gimon</span>
      </nuxt-link>
      <div class="hidden sm:block">
        <nuxt-link to="/events" class="variant-h px-6 font-semibold text-primary/75 active:text-accent">
          <span>Events</span>
        </nuxt-link>
        <nuxt-link to="/favorite" class="variant-h px-6 font-semibold text-primary/75 active:text-accent">
          <span>Favorite</span>
        </nuxt-link>
      </div>
    </nav>
  </header>
  <div class="pb-12">
    <slot />
  </div>
  <nav class="
      container mx-auto flex justify-center bottom-0 fixed z-30 
      backdrop-blur bg-white/95 text-primary/75
      border border-solid border-gray-200/50 
      sm:hidden
      ">
    <ul class="w-full flex justify-evenly font-semibold text-xs">
      <li class="w-1/3">
        <nuxt-link to="/" class="flex flex-col items-center py-1 active:text-accent">
          <i class="material-icons">festival</i>
          <span>Home</span>
        </nuxt-link>
      </li>
      <li class="w-1/3">
        <nuxt-link to="/events" class="flex flex-col items-center py-1 active:text-accent">
          <i class="material-icons">local_activity</i>
          <span>Events</span>
        </nuxt-link>
      </li>
      <li class="w-1/3">
        <nuxt-link to="/favorite" class="flex flex-col items-center py-1 active:text-accent">
          <i class="material-icons">favorite</i>
          <span>Favorite</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
  <footer class="m-auto w-full fixed bottom-0 bg-white/95">
    <hr class="border-secondary">
    <div class="max-w-5xl m-auto flex justify-between font-semibold text-sm text-primary">
      <div>This website is for demonstration purpose only.</div>
      <div>ciayang.dev @ {{ new Date().getFullYear() }}</div>
    </div>
  </footer>
</template>

<style scoped></style>