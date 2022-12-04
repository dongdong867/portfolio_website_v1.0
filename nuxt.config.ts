// https://nuxt.com/docs/api/configuration/nuxt-config
import svgloader from 'vite-svg-loader'

export default defineNuxtConfig({
	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore']
			}
		],
		['@nuxtjs/tailwindcss']
	],
	vite: {
		plugins: [svgloader()]
	},
	typescript: {
		typeCheck: true
	}
})
