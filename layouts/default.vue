<template>
  <div>
    <header class="sticky top-0 z-10 w-full backdrop-blur shadow-lg bg-white/95 text-primary">
      <nav class="h-12 sm:h-16 flex items-center justify-center text-2xl">
        <nuxt-link to="/" class="flex items-center justify-center">
          <img src="/favicon.ico" alt="logo icon" class="w-7 mx-2">
          <span class="font-semibold text-accent">Gi</span>
          <span class="font-normal ">mon</span>
        </nuxt-link>
      </nav>
    </header>
    <div class="h-[1000px]">
      <slot />
    </div>
  </div>
</template>

<style scoped></style>