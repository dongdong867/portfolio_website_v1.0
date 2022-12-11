<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end px-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Files</div>
				<div>Building</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Create a student file and stored in the system.
			</div>
		</div>
		<img :src="Building" class="img-size" />
	</div>
</template>

<script setup>
import Building from '~/assets/images/score-calculator/create.png?url'
</script>
