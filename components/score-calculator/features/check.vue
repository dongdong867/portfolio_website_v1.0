<template>
	<div
		class="w-[23vw] h-[20vw] flex bg-base-100 rounded-[30px] transition-all duration-200 ease-in-out cursor-none hover:bg-neutral-700 hover:drop-shadow-2xl"
		@click="$emit('checkClicked')"
		@mouseenter="hoverCheck = !hoverCheck"
		@mouseleave="hoverCheck = !hoverCheck"
	>
		<img
			:src="CheckIcon"
			class="h-[13.5vw] m-auto aspect-auto transition-all duration-200"
			:class="hoverCheck ? ['drop-shadow-[0_25px_20px_rgba(0,0,0,0.5)]'] : ['drop-shadow-none']"
		/>
	</div>
</template>

<script setup>
import CheckIcon from '~/assets/icons/score-calculator/check.svg?url'

const props = defineProps({
	hoverCheck: Boolean
})
</script>

<style lang="scss" scoped></style>
