<template>
	<div class="w-full h-max">
		<div class="w-max m-auto flex gap-x-10">
			<div class="h-[250px] px-5 pt-3 bg-base-100 rounded-[30px]">
				<img :src="TranslatorIntroductionView" class="h-[230px]" />
			</div>
			<div class="flex flex-col place-content-center">
				<div class="text-5xl font-bold">Translator Introduction</div>
				<div class="text-2xl mt-5">Webframe Developer</div>
				<div class="text-xl">2021</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import TranslatorIntroductionView from '~/assets/images/translator-introduction.png?url'
</script>

<style lang="scss" scoped></style>
