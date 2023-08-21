<template>
  <div class="max-w-5xl m-auto px-3 pt-5 pb-20">
    <h1 class="px-3 text-2xl font-bold text-gradient-primary">My Favorites</h1>
    <EventListing v-if="eventList.length > 0" :eventListing="eventList" :pagination="false" :editable="true" />
    <h3 v-else class="py-5 grid place-content-center">Add some event here!</h3>
  </div>
</template>

<script setup>
const { favorites } = useFavorite()
const eventList = favorites.value
</script>

<style scoped></style>