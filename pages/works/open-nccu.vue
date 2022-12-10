<template>
	<div
		class="w-screen h-[82vh] bg-scroll bg-no-repeat bg-[right_20vh_top_5vh] bg-[length:auto_72vh] overflow-y-auto overflow-x-hidden select-none cursor-default snap-y snap-mandatory scroll-mb-[50vh] scroll-pb-[2vh] scroll-pt-[2vh]"
		:style="{ 'background-image': 'url(' + MainFraneImg + ')' }"
	>
		<div class="w-screen flex flex-col text-3xl font-bold">
			<OpenNccuTitle />
			<div class="w-full bg-base text-2xl">
				<OpenNccuOverview />
				<OpenNccuBackground />
				<OpenNccuFeatures />
			</div>
		</div>
	</div>
</template>

<script setup>
import MainFraneImg from '~/assets/images/open-nccu/main-frame.png?url'

definePageMeta({
	layout: 'work'
})
</script>
