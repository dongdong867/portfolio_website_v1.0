<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>South or North</div>
				<div>Building Page</div>
				<div>(Calculator ver.)</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">A page to avoid lossing in school building.</div>
		</div>
		<img :src="Calculator" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import Calculator from '~/assets/images/open-nccu/s-n-calculator.png?url'
</script>

<style lang="scss" scoped></style>
