<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div class="work-index-basic" :style="{ 'background-image': 'url(' + ScoreCalculator + ')' }">
			<div class="work-index-label">
				<div class="text-5xl gradient-text">Score Calculator</div>
				<div class="mt-[2vh]">Java Developer</div>
				<div>2021</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import ScoreCalculator from '~/assets/images/score-calculator.png?url'

const isHovering = ref(false)
</script>

<style lang="scss" scoped></style>
