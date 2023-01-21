<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div class="bg-[#bababa] rounded-[30px]">
			<div
				class="bg-contain work-index-basic bg-right"
				:style="{ 'background-image': 'url(' + title + ')' }"
			>
				<div class="work-index-label">
					<div class="text-5xl gradient-text">Let's Beat Google</div>
					<div class="mt-[2vh]">Full Stack Developer, UI/UX Designer</div>
					<div>2022</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import title from '~/assets/images/lets-beat-google/main.png?url'

const isHovering = ref(false)
</script>
