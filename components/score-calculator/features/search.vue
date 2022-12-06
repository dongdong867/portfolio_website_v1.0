<template>
	<div
		class="w-[23vw] h-[20vw] flex bg-base-100 rounded-[30px] transition-all duration-200 ease-in-out cursor-none hover:bg-neutral-700 hover:drop-shadow-2xl"
		@click="$emit('searchClicked')"
		@mouseenter="hoverSearch = !hoverSearch"
		@mouseleave="hoverSearch = !hoverSearch"
	>
		<img
			:src="FindIcon"
			class="h-[13.5vw] m-auto aspect-auto transition-all duration-200"
			:class="hoverSearch ? ['drop-shadow-[0_25px_20px_rgba(0,0,0,0.5)]'] : ['drop-shadow-none']"
		/>
	</div>
</template>

<script setup>
import FindIcon from '~/assets/icons/score-calculator/find.svg?url'

const props = defineProps({
	hoverSearch: Boolean
})
</script>

<style lang="scss" scoped></style>
