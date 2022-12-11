<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + a + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<LetsBeatGoogleTitle />
			<div class="mt-[22vh] bg-base">
				<LetsBeatGoogleOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<LetsBeatGoogleBackground />
					<LetsBeatGoogleObjective />
					<LetsBeatGoogleProblems />
				</div>
				<LetsBeatGoogleShowcase />
			</div>
		</div>
	</div>
</template>

<script>
definePageMeta({
	layout: 'work'
})
</script>
