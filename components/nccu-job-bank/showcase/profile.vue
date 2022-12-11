<template>
	<div class="my-[10vh] showcase-basic -ml-[20vw]">
		<img :src="Profile" class="img-size" />
		<div class="flex-con-end mb-[20vh] ml-[5vw]">
			<div class="text-6xl gradient-text">
				<div>Self/ Company</div>
				<div>Profile Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh]">Show personal and company information.</div>
		</div>
	</div>
</template>

<script setup>
import Profile from '~/assets/images/nccu-job-bank/showcase/profile.png?url'
</script>

<style lang="scss" scoped></style>
