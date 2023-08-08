<template>
  <div class="grid place-content-center px-3 pt-5 pb-20">
    <h1 class="px-3 text-2xl font-bold text-gradient-primary">Upcoming Events</h1>
    <div v-for="event in eventListing" :key="event.id">
      <nuxt-link :to="`/events/${event.id}`">
        <div class="event-card max-w-[400px] px-3 py-1">
          <img class="my-3 aspect-[3/2]" :src="event.thumbnail.url" alt="event image" />
          <div class="text-xl font-bold text-gradient-primary">{{ event.name }}</div>
          <div class="text-lg font-semibold text-gray-800">
            <NuxtTime :datetime="event.dates.start.dateTime" date-style="long" time-style="short" />
          </div>
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

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.event-card:hover {
  transition: all;
  transition-duration: 500ms;
  animation: ease-in-out;
  transform: scale(105%);
}
</style>