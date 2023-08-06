import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				primary: ['Lora', 'serif'],
			},
			colors: {
				text: '#020105',
				background: '#f5f1fd',
				primary: '#3e129b',
				secondary: '#dbcdf9',
				accent: '#591ae0',
			},
		},
	},
}
