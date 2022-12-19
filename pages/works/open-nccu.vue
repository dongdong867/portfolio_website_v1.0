<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + Title + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<OpenNccuTitle />
			<div class="mt-[22vh] bg-base">
				<OpenNccuOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<OpenNccuBackground />
					<OpenNccuObjective />
					<OpenNccuProblems class="w-[65vw]" />
				</div>
				<OpenNccuShowcase />
			</div>
		</div>
	</div>
</template>

<script setup>
import Title from '~/assets/images/open-nccu/title.png?url'

definePageMeta({
	layout: 'work'
})
</script>
