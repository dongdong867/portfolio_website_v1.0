<template>
	<div class="pt-[5vh] snap-end snap-always">
		<div class="w-[50vw]">
			A prototype web application helps people find car parking space in daily life.
		</div>
		<div class="flex gap-x-[1vw]">
			<div
				class="work-button"
				@mouseenter="hoverOnButton = !hoverOnButton"
				@mouseleave="hoverOnButton = !hoverOnButton"
			>
				<a
					href="https://tricargo.web.app"
					target="_blank"
					class="flex place-items-baseline gap-x-[1vw]"
				>
					<div :class="[{ 'animate-[link-hover-bounce_1s_infinite]': hoverOnButton }]">→</div>
					<div>Goto Site</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script setup>
const hoverOnButton = ref(false)
</script>

<style lang="scss" scoped></style>
