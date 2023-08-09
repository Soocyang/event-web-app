<template>
  <div v-for="event in eventListing" :key="event.id">
    <nuxt-link :to="`/events/${event.id}`">
      <div class="event-card max-w-[400px] px-3 py-1">
        <img class="my-3 aspect-[16/9]" :src="event.thumbnail.url" alt="event image" />
        <div class="text-xl font-bold text-gradient-primary">{{ event.name }}</div>
        <div class="text-lg font-semibold text-gray-800">
          <NuxtTime :datetime="event.dates.start.dateTime" date-style="long"
            time-style="short" />
        </div>
      </div>
    </nuxt-link>
    <div v-if="editable" class="btn-group flex flex-row justify-between px-3 my-2">
      <button @click="removeFavorite(event.id)" class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded w-full mr-1">
        Remove
      </button>
    </div>
  </div>
</template>

<script setup>
const { eventListing, editable } = defineProps(['eventListing', 'editable'])
const { removeFavorite } = useFavorite()


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