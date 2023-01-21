<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Reservation Page</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				After clicking the reserve button, the system will count down 10 minutes and keep the
				parking space available for the user.
			</div>
		</div>
		<img :src="reserve" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import reserve from '~/assets/images/tricargo/showcase/reserve.png?url'
</script>

<style lang="scss" scoped></style>
