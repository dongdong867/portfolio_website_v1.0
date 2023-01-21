<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Error Page</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				When the user has already parked in a space, the system will show error message when user
				click another space.
			</div>
		</div>
		<img :src="error" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import error from '~/assets/images/tricargo/showcase/error.png?url'
</script>

<style lang="scss" scoped></style>
