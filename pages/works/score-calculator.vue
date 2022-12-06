<template>
	<div
		class="w-screen h-[82vh] bg-scroll bg-no-repeat bg-[right_0_top_5vh] bg-[length:auto_62vh] overflow-y-auto overflow-x-hidden select-none cursor-default snap-y snap-mandatory scroll-mt-[40vh]"
		:style="{ 'background-image': 'url(' + ScoreCalculatorView + ')' }"
	>
		<div class="w-screen flex flex-col text-3xl font-bold">
			<ScoreCalculatorTitle />
			<div class="w-full bg-base text-2xl">
				<ScoreCalculatorOverview />
				<ScoreCalculatorBackground />
				<ScoreCalculatorFeatures />
			</div>
		</div>
	</div>
</template>

<script setup>
import ScoreCalculatorView from '~/assets/images/score-calculator.png?url'

definePageMeta({
	layout: 'work'
})
</script>

<style lang="scss"></style>
