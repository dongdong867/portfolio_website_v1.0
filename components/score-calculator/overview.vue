<template>
	<div class="w-[80vw] m-auto pt-[4vh] snap-end snap-always">
		<div class="w-[50vw]">
			A command line Java application that automatically checks the answer inputed and calculate the
			score.
		</div>
		<a href="https://github.com/dongdong867/NCCU_Job_Bank" target="_blank">
			<div
				class="w-max mt-[3vh] p-5 flex place-items-baseline gap-x-[1vw] border-[3px] rounded-[50px] cursor-none hover:gradient-background hover:drop-shadow-[0_0_5px_rgba(200,200,200,0.4)]"
				@mouseenter="hoverOnButton = !hoverOnButton"
				@mouseleave="hoverOnButton = !hoverOnButton"
			>
				<div
					:class="[{ 'animate-[link-hover-bounce_1s_infinite]': hoverOnButton }]"
					class="text-3xl"
				>
					→
				</div>
				<div>GitHub</div>
			</div>
		</a>
	</div>
</template>

<script setup>
const hoverOnButton = ref(false)
</script>

<style lang="scss" scoped></style>
