<template>
	<div class="w-full h-max">
		<div class="w-max m-auto flex gap-x-10">
			<div class="flex flex-col place-content-center place-items-end">
				<div class="text-5xl font-bold">Open NCCU</div>
				<div class="text-2xl mt-5">Front-end Developer</div>
				<div class="text-xl">2022/ ONGOING</div>
			</div>
			<img :src="OpenNCCUIcon" class="w-[250px] rounded-[30px]" />
			<div class="w-[355px] h-[250px] bg-base-100 rounded-[30px]">
				<img :src="OpenNCCUPreview" class="h-[234px] m-auto mt-4" />
			</div>
		</div>
	</div>
</template>

<script setup>
import OpenNCCUIcon from '~/assets/images/open-nccu.png?url'
import OpenNCCUPreview from '~/assets/images/open-nccu-preview.png?url'
</script>
