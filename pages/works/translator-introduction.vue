<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + a + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<TranslatorIntroductionTitle />
			<div class="mt-[22vh] bg-base">
				<TranslatorIntroductionOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<TranslatorIntroductionBackground />
					<TranslatorIntroductionObjective />
					<TranslatorIntroductionProblems />
				</div>
				<TranslatorIntroductionShowcase />
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'work'
})
</script>

<style lang="scss" scoped></style>
