<template>
	<div class="work-basic" :style="{ 'background-image': 'url(' + NCCUJobBankView + ')' }">
		<div class="w-screen flex flex-col text-2xl font-bold">
			<NccuJobBankTitle />
			<div class="mt-[22vh] bg-base">
				<NccuJobBankOverview class="w-[80vw] m-auto" />
				<div class="w-[70vw] m-auto">
					<NccuJobBankBackground />
					<NccuJobBankObjective />
					<NccuJobBankProblems />
				</div>
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
