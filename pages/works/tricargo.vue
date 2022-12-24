<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + title + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<TricargoTitle />
			<div class="mt-[22vh] bg-base">
				<TricargoOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<TricargoBackground />
					<TricargoObjective />
					<TricargoProblems />
				</div>
				<TricargoShowcase />
			</div>
		</div>
	</div>
</template>

<script setup>
import title from '~/assets/images/tricargo/title.png?url'

definePageMeta({
	layout: 'work'
})
</script>

<style lang="scss" scoped></style>
