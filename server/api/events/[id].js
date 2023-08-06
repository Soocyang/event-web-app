import mockEventDetails from '../../../data/sampleDetails.json'

export default defineEventHandler(async (event) => {
	const { tmBaseUrl, tmApiKey, isDebug } = useRuntimeConfig()
	if (isDebug === 'true') return mockEventDetails
	const { id } = event.context.params
	const uri = tmBaseUrl + `/events/${id}.json` + `?apikey=${tmApiKey}`
	const response = await $fetch(uri)

	return response
})
