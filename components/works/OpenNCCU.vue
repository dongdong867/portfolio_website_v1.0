<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div
			class="work-index-basic bg-[90vw_auto]"
			:style="{ 'background-image': 'url(' + OpenNCCUPreview + ')' }"
		>
			<div class="work-index-label">
				<div class="text-5xl gradient-text">Open NCCU</div>
				<div class="mt-[2vh]">Frontend Developer</div>
				<div>2022/ ONGOING</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import OpenNCCUPreview from '~/assets/images/open-nccu/title.png?url'

const isHovering = ref(false)
</script>
