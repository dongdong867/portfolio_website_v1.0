<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Search</div>
				<div>(Teacher ver.)</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">Access to search scores of all students.</div>
		</div>
		<img :src="TearchSearch" class="img-size" />
	</div>
</template>

<script setup>
import TearchSearch from '~/assets/images/score-calculator/teacher-search.png?url'
</script>
