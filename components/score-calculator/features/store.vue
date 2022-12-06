<template>
	<div
		class="w-[23vw] h-[20vw] flex bg-base-100 rounded-[30px] transition-all duration-200 ease-in-out cursor-none hover:bg-neutral-700 hover:drop-shadow-2xl"
		@click="$emit('storeClicked')"
		@mouseenter="hoverStore = !hoverStore"
		@mouseleave="hoverStore = !hoverStore"
	>
		<img
			:src="StoringIcon"
			class="h-[13.5vw] m-auto aspect-auto transition-all duration-200"
			:class="hoverStore ? ['drop-shadow-[0_25px_20px_rgba(0,0,0,0.5)]'] : ['drop-shadow-none']"
		/>
	</div>
</template>

<script setup>
import StoringIcon from '~/assets/icons/score-calculator/storing.svg?url'
const props = defineProps({
	hoverStore: Boolean
})
</script>

<style lang="scss" scoped></style>
