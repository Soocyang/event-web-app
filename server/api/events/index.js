import mockEvents from '../../../data/sampleListing.json'

export default defineEventHandler(async (event) => {
	const { tmBaseUrl, tmApiKey, isDebug } = useRuntimeConfig()
	if (isDebug === 'true') return mockEvents

	const { type = 'event', size = '30' } = event.context.params

	const {
		_embedded: { events },
	} = await $fetch(tmBaseUrl + '/events.json', {
		query: {
			apikey: tmApiKey,
			size,
			type,
			classificationName: ['music'],
			preferredCountry: ['sg'],
			sort: 'random'
		},
	})

	return events
})
