<template>
	<div class="pl-[10vw] pb-[5vh] snap-end snap-always">
		<div class="w-[40vw] mt-[10vh]">
			A webapp build by students in NCCU, and build for students in NCCU.
		</div>
		<div
			class="w-max mt-10 p-5 flex space-x-2 border-[3px] rounded-[50px] cursor-none hover:bg-base-100 hover:border-base-100"
			@mouseenter="hoverOnButton = !hoverOnButton"
			@mouseleave="hoverOnButton = !hoverOnButton"
		>
			<div :class="[{ 'animate-[hover-bounce_1s_infinite]': hoverOnButton }]">→</div>
			<div>Goto Site</div>
		</div>
	</div>
</template>

<script setup>
const hoverOnButton = ref(false)
</script>

<style lang="scss">
@keyframes hover-bounce {
	0%,
	100% {
		transform: translateX(-25%);
		animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
	}
	50% {
		transform: translateX(0);
		animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
	}
}
</style>
