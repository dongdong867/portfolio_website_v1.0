<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Paying Page</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				When the system detect the car leaving the space, it will automatically pay the bill from
				the user's credit card.
			</div>
		</div>

		<img :src="paying" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import paying from '~/assets/images/tricargo/showcase/paying.png?url'
</script>

<style lang="scss" scoped></style>
