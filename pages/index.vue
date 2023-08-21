<template>
  <div class="max-w-5xl m-auto px-3 pt-5 pb-20">
    <h1 class="px-3 text-2xl font-bold text-gradient-primary">Home</h1>
    <EventListing :currentPage="currentPage" :eventListing="listing" :pagination="true" :editable="false" :handlePageNext="handlePageNext"
      :handlePagePrev="handlePagePrev" />
  </div>
</template>

<script setup>
const currentPage = useState('currentPage', () => 0)
const listing = useState('listing', () => [])

const fetchListing = async (page = 0) => {
  const { data: events } = await useFetch('/api/events', {
    query: {
      size: 30,
      page
    }
  })

  return events.value.map((eventDetails) => {
    return {
      ...eventDetails,
      thumbnail: eventDetails.images.find((img) => img.width >= 450)
    }
  })
}

const handlePageNext = async () => {
  currentPage.value++
  listing.value = await fetchListing(currentPage.value)
}

const handlePagePrev = async () => {
  if (currentPage.value === 0) return
  currentPage.value--
  listing.value = await fetchListing(currentPage.value)
}

listing.value = await fetchListing()

</script>

<style scoped></style>