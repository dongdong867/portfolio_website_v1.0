<template>
	<div
		class="w-screen h-[87vh] bg-scroll bg-no-repeat bg-[length:100vw_auto] overflow-y-auto overflow-x-hidden select-none cursor-default snap-y snap-mandatory scroll-pb-[5vh] scroll-pt-[8vh]"
		:style="{ 'background-image': 'url(' + NCCUJobBankView + ')' }"
	>
		<div class="w-screen flex flex-col text-3xl font-bold">
			<NccuJobBankTitle />
			<div class="w-screen h-full mt-[22vh] bg-base text-2xl">
				<NccuJobBankOverview />
				<NccuJobBankBackground />
				<NccuJobBankObjective />
				<NccuJobBankProblems />
				<NccuJobBankShowcase />
			</div>
		</div>
	</div>
</template>

<script setup>
import NCCUJobBankView from '~/assets/images/nccu-job-bank/title.png?url'

definePageMeta({
	layout: 'work'
})
</script>
