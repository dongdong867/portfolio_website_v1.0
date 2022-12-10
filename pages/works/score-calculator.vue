<template>
	<div
		class="w-screen h-[87vh] bg-scroll bg-no-repeat bg-[length:100vw_auto] overflow-y-auto overflow-x-hidden select-none cursor-default snap-y snap-mandatory scroll-pb-[5vh] scroll-pt-[5vh]"
		:style="{ 'background-image': 'url(' + Title + ')' }"
	>
		<div class="w-screen flex flex-col text-3xl font-bold">
			<ScoreCalculatorTitle />
			<div class="w-screen h-full mt-[22vh] bg-base text-2xl">
				<ScoreCalculatorOverview />
				<ScoreCalculatorBackground />
				<ScoreCalculatorObjective />
				<ScoreCalculatorProblems />
				<ScoreCalculatorShowcase />
			</div>
		</div>
	</div>
</template>

<script setup>
import Title from '~/assets/images/score-calculator/title.png?url'

definePageMeta({
	layout: 'work'
})
</script>
