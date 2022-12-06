<template>
	<div class="w-full h-max">
		<div class="w-max m-auto flex gap-x-10">
			<div class="flex flex-col place-content-center place-items-end">
				<div class="text-5xl font-bold">NCCU Job Bank</div>
				<div class="text-2xl mt-5">Software Developer, UI/UX Designer</div>
				<div class="text-xl">2022</div>
			</div>
			<div class="w-max h-[250px] px-5 pt-2 bg-base-100 rounded-[30px] flex">
				<img :src="NCCUJobBankView" class="h-[230px] aspect-auto m-auto" />
			</div>
		</div>
	</div>
</template>

<script setup>
import NCCUJobBankView from '~/assets/images/nccu-job-bank.png?url'
</script>

<style lang="scss" scoped></style>
