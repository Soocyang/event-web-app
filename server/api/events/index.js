import mockEvents from '../../../data/sampleListing.json'

export default defineEventHandler(async (event) => {
	const { tmBaseUrl, tmApiKey, isDebug } = useRuntimeConfig()
	if (isDebug === 'true') return mockEvents

	const { size = '30', classificationName, sort = 'relevance,desc' } = event.context.params

	const {
		_embedded: { events },
	} = await $fetch(tmBaseUrl + '/events.json', {
		query: {
			apikey: tmApiKey,
			size,
			classificationName,
			preferredCountry: ['SG', 'MY'],
			sort,
		},
	})

	return events
})
