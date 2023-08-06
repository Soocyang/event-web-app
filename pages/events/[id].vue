<template>
  <div class="container w-full p-3">
    <h1 class="text-xl">Event Details</h1>
    <h2 class="text-2xl">{{ eventDetails.name }}</h2>
    <img class="my-3" :src="eventDetails.images[eventDetails.images.length - 1]?.url" alt="event image" />
    <h3>Date of event: </h3>
    <h3>{{ eventDetails.dates.start.localDate }} at {{ eventDetails.dates.start.localTime }}</h3>
  </div>
</template>

<script setup>
const { id } = useRoute().params
const { data: eventDetails } = await useFetch(`/api/events/${id}`)

</script>

<style scoped></style>