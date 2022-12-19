<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Main Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">Main page of the web application.</div>
		</div>
		<img :src="Main" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import Main from '~/assets/images/open-nccu/main-frame.png?url'
</script>

<style lang="scss" scoped></style>
