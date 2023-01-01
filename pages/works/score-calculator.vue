<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + Title + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<ScoreCalculatorTitle />
			<div class="mt-[22vh] bg-base">
				<ScoreCalculatorOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<ScoreCalculatorBackground />
					<ScoreCalculatorObjective />
					<ScoreCalculatorProblems />
				</div>
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
