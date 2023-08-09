<template>
  <NuxtLoadingIndicator color="#591ae0" />
  <header class="sm:sticky top-0 z-10 w-full backdrop-blur shadow-lg bg-white/95">
    <nav class="h-12 sm:h-16 flex items-center justify-center sm:text-2xl text-xl">
      <nuxt-link to="/" class="flex items-center justify-center">
        <img src="/favicon.ico" alt="logo icon" class="sm:w-7 w-6 mx-1">
        <span class="font-semibold text-gradient-primary">Gimon</span>
      </nuxt-link>
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
      <!-- <li class="w-1/3">
          <nuxt-link to="/" class="flex flex-col items-center py-1 active:text-accent">
            <i class="material-icons">festival</i>
            <span>Home</span>
          </nuxt-link>
        </li> -->
      <li class="w-1/2">
        <nuxt-link to="/events" class="flex flex-col items-center py-1 active:text-accent">
          <i class="material-icons">local_activity</i>
          <span>Events</span>
        </nuxt-link>
      </li>
      <li class="w-1/2">
        <nuxt-link to="/favorite" class="flex flex-col items-center py-1 active:text-accent">
          <i class="material-icons">favorite</i>
          <span>Favorite</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>