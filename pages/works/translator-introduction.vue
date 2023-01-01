<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + title + ')' }">
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
import title from '~/assets/images/translator-introduction/title.png?url'

definePageMeta({
	layout: 'work'
})
</script>

<style lang="scss" scoped></style>
