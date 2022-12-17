<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div class="bg-[#bababa] rounded-[30px]">
			<div class="bg-contain work-index-basic" :style="{ 'background-image': 'url(' + icon + ')' }">
				<div class="work-index-label">
					<div class="text-5xl gradient-text">Let's Beat Google</div>
					<div class="mt-[2vh]">Full Stack Developer, UI/UX Designer</div>
					<div>2022/ ONGOING</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import icon from '~/assets/icons/lets-beat-google/icon.svg?url'

const isHovering = ref(false)
</script>
