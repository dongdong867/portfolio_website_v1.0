<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Check and</div>
				<div>Calculate</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Input answers and calculat scores automatically.
			</div>
		</div>
		<img :src="CheckAndCalculate" class="img-size" />
	</div>
</template>

<script setup>
import CheckAndCalculate from '~/assets/images/score-calculator/check.png?url'
</script>
