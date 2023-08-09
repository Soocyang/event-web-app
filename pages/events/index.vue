<template>
  <div class="grid place-content-center px-3 pt-5 pb-20">
    <h1 class="px-3 text-2xl font-bold text-gradient-primary">Upcoming Events</h1>
    <EventListing :eventListing="eventListing" :editable="false" />
  </div>
</template>

<script setup>
const { data: events } = await useFetch('/api/events', {
  query: {
    size: 30,
  }
})

const eventListing = events.value.map((eventDetails) => {
  return {
    ...eventDetails,
    thumbnail: eventDetails.images.find((img) => img.width >= 450)
  }
})



</script>

<style scoped>
</style>