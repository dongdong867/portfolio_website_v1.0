<template>
	<div class="w-full h-max">
		<div class="w-max m-auto gap-x-10 flex">
			<div class="flex flex-col place-content-center place-items-end">
				<div class="text-5xl font-bold">Score Calculator</div>
				<div class="text-2xl mt-5">Developer</div>
				<div class="text-xl">2021</div>
			</div>
			<div class="h-[250px] px-5 pt-4 bg-base-100 rounded-[30px]">
				<img :src="ScoreCalculatorView" class="h-[230px]" />
			</div>
		</div>
	</div>
</template>

<script setup>
import ScoreCalculatorView from '~/assets/images/score-calculator.png?url'
</script>

<style lang="scss" scoped></style>
