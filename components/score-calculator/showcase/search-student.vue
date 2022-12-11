<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Search</div>
				<div>(Student ver.)</div>
			</div>
			<div class="w-[40vw] text-right mt-[1vh]">Access to search scores of him or herself.</div>
		</div>
		<img :src="StudentSearch" class="img-size" />
	</div>
</template>

<script setup>
import StudentSearch from '~/assets/images/score-calculator/student-search.png?url'
</script>
