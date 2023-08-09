<template>
  <div class="container w-full p-3">
    <div class=" px-3 pt-1 pb-5">
      <img class="my-3" :src="bannerImage.url" alt="event image" />
      <h2 class="text-2xl font-bold text-gradient-primary">{{ eventDetails.name }}</h2>
      <div class="text-lg font-semibold text-gray-800">
        <NuxtTime :datetime="eventDetails.dates.start.dateTime" date-style="long" time-style="short" />
      </div>
      <hr class="my-2">
      <!-- Event Details -->
      <h1 class="py-4 text-2xl font-semibold text-accent underline underline-offset-1">Event Details</h1>
      <p class="text-base text-gray-800">{{ eventDetails.info }}</p>
      <p class="text-base text-gray-800">{{ eventDetails.pleaseNote }}</p>
      <p class="text-base text-gray-800">{{ eventDetails.accessibility?.info }}</p>
      <p class="text-base text-gray-800">
        {{ (eventDetails.accessibility?.ticketLimit || eventDetails.ticketLimit) && 'Ticket limit: ' }}
        {{ eventDetails.accessibility?.ticketLimit || eventDetails.ticketLimit?.info }}
      </p>
      <!-- Promoters -->
      <h2 class="py-4 text-2xl font-semibold text-accent underline underline-offset-1">Promoters</h2>
      <div v-for="promoter in eventDetails.promoters" :key="promoter.id">
        <div class="flex flex-col justify-center">
          <div>{{ promoter.name }}</div>
          <div>{{ promoter.description }}</div>
        </div>
      </div>
      <!-- Ticket Pricing -->
      <h2 class="py-4 text-2xl font-semibold text-accent underline underline-offset-1">Ticket Pricing</h2>
      <div v-for="priceInfo, index in eventDetails?.priceRanges" :key="index">
        <div>{{ priceInfo.type }}</div>
        <div>{{ priceInfo.currency }} {{ priceInfo.min }} ~ {{ priceInfo.max }}</div>
      </div>
      <!-- Button -->
      <div class="btn-group flex flex-row justify-between my-4">
        <button @click="handleAddToCart"
          class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded w-full mr-1">
          Add to Cart
        </button>
        <button @click="handleAddFavorite"
          class="bg-accent hover:bg-primary text-white font-bold py-2 px-4 rounded w-full ml-1">
          Favorite
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { addFavorite } = useFavorite()
const { id } = useRoute().params
const { data: eventDetails } = await useFetch(`/api/events/${id}`)

const bannerImage = eventDetails.value.images.find((img) => img.width >= 450)

function handleAddFavorite() {
  alert(`Added to favorite: ${eventDetails.value}`)
  addFavorite({
    ...eventDetails.value,
    thumbnail: bannerImage
  })
}

function handleAddToCart() {
  alert(`WIP: Added to cart: ${eventDetails.value.name}`)
}

</script>

<style scoped></style>