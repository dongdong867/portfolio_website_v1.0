<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div class="work-index-basic" :style="{ 'background-image': 'url(' + NCCUJobBank + ')' }">
			<div class="work-index-label">
				<div class="text-5xl gradient-text">NCCU Job Bank</div>
				<div class="mt-[2vh]">Software Developer, UI/UX Designer</div>
				<div>2022</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import NCCUJobBank from '~/assets/images/nccu-job-bank/title.png?url'

const isHovering = ref(false)
</script>
