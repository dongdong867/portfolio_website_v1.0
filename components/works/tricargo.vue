<template>
	<div
		class="w-max h-max p-1 m-auto rounded-[30px]"
		:class="{ 'gradient-background': isHovering }"
		@mouseenter="isHovering = true"
		@mouseleave="isHovering = false"
	>
		<div class="work-index-basic" :style="{ 'background-image': 'url(' + tricargo + ')' }">
			<div class="work-index-label">
				<div class="text-5xl gradient-text">triCARgo</div>
				<div class="mt-[2vh]">Prototype Developer, UI/UX Designer</div>
				<div>2022</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import tricargo from '~/assets/images/tricargo/main.png?url'

const isHovering = ref(false)
</script>
