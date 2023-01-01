<template>
	<div class="pt-[5vh] snap-end snap-always">
		<div class="w-[50vw]">
			A command line Java application that automatically checks the answer inputed and calculate the
			score.
		</div>
		<div
			class="work-button"
			@mouseenter="hoverOnButton = !hoverOnButton"
			@mouseleave="hoverOnButton = !hoverOnButton"
		>
			<a
				href="https://github.com/dongdong867/Score_Calculator"
				target="_blank"
				class="flex place-items-baseline gap-x-[1vw]"
			>
				<div
					:class="[{ 'animate-[link-hover-bounce_1s_infinite]': hoverOnButton }]"
					class="text-3xl"
				>
					→
				</div>
				<div>GitHub</div>
			</a>
		</div>
	</div>
</template>

<script setup>
const hoverOnButton = ref(false)
</script>
