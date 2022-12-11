<template>
	<div class="w-screen h-full flex flex-col gap-y-[10vh]">
		<nuxt-link to="works/open-nccu"><WorksOpenNCCU /></nuxt-link>
		<nuxt-link to="works/lets-beat-google"><WorksLetsBeatGoogle /></nuxt-link>
		<nuxt-link to="works/nccu-job-bank"><WorksNCCUJobBank /></nuxt-link>
		<nuxt-link to="works/translator-introduction"><WorksTranslatorIntroduction /></nuxt-link>
		<nuxt-link to="works/score-calculator"><WorksScoreCalculator /></nuxt-link>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'works-index'
})
</script>
