<template>
  <div v-show="pagination" class="my-5 flex justify-end">
    <button @click="handlePagePrev()" class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded mr-1"
        :class="currentPage === 0 ? 'bg-secondary hover:bg-secondary' : ''">
      Prev
    </button>
    <button @click="handlePageNext()" class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded mr-1">
      Next
    </button>
  </div>
  <div class="grid sm:grid-cols-3 md:gap-1 sm:gap-5">
    <div v-for="event in eventListing" :key="event.id">
      <div class="h-full flex flex-col">
        <nuxt-link :to="`/events/${event.id}`">
          <div class="event-card sm:max-w-[350px] px-3 py-1">
            <img class="my-3 aspect-[16/9]" :src="event.thumbnail.url" alt="event image" />
            <div class="text-xl font-bold text-gradient-primary">{{ event.name }}</div>
            <div class="text-lg font-semibold text-gray-800">
              <NuxtTime :datetime="event.dates.start.dateTime" date-style="long" time-style="short" />
            </div>
          </div>
        </nuxt-link>
        <div v-if="editable" class="btn-group mt-auto flex flex-row justify-between px-3 my-2">
          <button @click="removeFavorite(event.id)"
            class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded w-full mr-1">
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { eventListing, pagination, editable, currentPage, handlePageNext, handlePagePrev } = defineProps([
  'eventListing',
  'pagination',
  'editable',
  'currentPage',
  'handlePageNext',
  'handlePagePrev'
])
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