<template>
	<div class="w-full h-max">
		<div class="w-max m-auto flex gap-10">
			<div class="w-[250px] h-[250px] bg-base-100 rounded-[30px] flex flex-col place-items-center">
				<img :src="OnWorkingIcon" class="m-auto" />
				<div class="mb-4">Project Designing</div>
			</div>
			<div class="flex flex-col place-content-center">
				<div class="text-5xl font-bold">Let's Beat Google</div>
				<div class="text-2xl mt-5">Full Stack Developer, UI/UX Designer</div>
				<div class="text-xl">2022/ ONGOING</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import OnWorkingIcon from '~/assets/icons/works/on-working.svg?url'
</script>

<style lang="scss" scoped></style>
