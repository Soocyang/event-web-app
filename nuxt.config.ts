// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'Gimon',
			meta: [{ name: 'description', content: 'Gimon is an online ticketing system.' }],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
				},
			],
		},
		baseURL: '/event-web-app/', // baseURL: '/<repository>/'
	},
	runtimeConfig: {
		tmApiKey: process.env.TM_API_KEY,
		public: {},
	},
})
