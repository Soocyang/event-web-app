import mockEvents from '../../../data/sampleListing.json'

export default defineEventHandler(async (event) => {
	const { tmBaseUrl, tmApiKey, isDebug } = useRuntimeConfig()
	if (isDebug === 'true') return mockEvents

	const { size = '30', sort = 'relevance,desc', page } = getQuery(event);

	const {
		_embedded: { events },
	} = await $fetch(tmBaseUrl + '/events.json', {
		query: {
			apikey: tmApiKey,
			size,
			preferredCountry: ['SG', 'MY'],
			sort,
			page
		},
	})

	return events
})
