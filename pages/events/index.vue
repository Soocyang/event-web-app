<template>
  <div class="container w-full p-3">
    <h1 class="text-xl">Events</h1>
    <div v-for="event in eventListing" :key="event.id">
      <nuxt-link :to="`/events/${event.id}`">
        <div class="card p-3">
          <span>{{ event.name }}</span>
          <img class="my-3" :src="event.thumbnail.url" alt="event image" />
          <h3>{{ event.dates.start.dateTime }}</h3>
        </div>
      </nuxt-link>
    </div>
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

<style scoped></style>