<template>
	<div class="w-[70vw] m-auto mt-[50vh] pl-[2vw] text-5xl font-extrabold snap-start snap-always">
		Showcase
	</div>
	<img :src="HomePage" class="h-[60vh] m-auto my-[10vh]" />
	<NccuJobList />
	<NccuJobBankShowcaseDisplayArea />
	<NccuJobBankShowcaseCollection />
	<NccuJobBankShowcaseProfile />

	<img :src="MainPageWithBackground" class="w-[100vw] snap-end snap-always" />
</template>
<script setup>
import MainPageWithBackground from '~/assets/images/nccu-job-bank/showcase/main.png?url'
import HomePage from '~/assets/images/nccu-job-bank/showcase/home-page.png?url'
</script>
<style>
.img-size {
	@apply h-[75vh] m-auto;
}
</style>
