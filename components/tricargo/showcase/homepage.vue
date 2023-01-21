<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Homepage</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				With the use of Google Maps API, user can reserve a parking space display on the map.
			</div>
		</div>
		<img :src="homepage" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import homepage from '~/assets/images/tricargo/showcase/homepage.png?url'
</script>

<style lang="scss" scoped></style>
