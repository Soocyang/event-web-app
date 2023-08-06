<template>
  <div class="container w-full p-3">
    <h1 class="text-xl">Events</h1>
    <div v-for="event in events" :key="event.id">
      <nuxt-link :to="`/events/${event.id}`">
        <div class="card p-3">
          <span>{{ event.name }}</span>
          <img class="my-3" :src="event.images[0]?.url" alt="event image" />
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



</script>

<style scoped></style>