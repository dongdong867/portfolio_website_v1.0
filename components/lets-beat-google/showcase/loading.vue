<template>
	<div class="mb-[20vh] mt-[10vh] gap-x-[2vw] showcase-basic">
		<div class="w-[36vw] mb-[10vh] flex-con-end place-items-end">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Loading Page</div>
			</div>
			<div class="w-[32vw] mt-[1vh] text-right">
				Loading page with a coffee bean spinning based on CSS animation.
			</div>
		</div>
		<img :src="loading" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import loading from '~/assets/images/lets-beat-google/showcase/loading.png?url'
</script>
