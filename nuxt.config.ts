// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss', 'nuxt-time'],
	app: {
		head: {
			title: 'Gimon',
			meta: [{ name: 'description', content: 'Gimon is an online ticketing system.' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/event-web-app/favicon.ico',
				},
			],
		},
		baseURL: '/event-web-app/', // baseURL: '/<repository>/',
	},
	runtimeConfig: {
		tmApiKey: process.env.TM_API_KEY,
		tmBaseUrl: process.env.TM_BASE_URL,
		isDebug: process.env.IS_DEBUG,
		public: {},
	},
})
