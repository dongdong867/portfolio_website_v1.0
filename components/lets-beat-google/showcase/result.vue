<template>
	<div class="mb-[20vh] mt-[10vh] gap-x-[2vw] showcase-basic">
		<div class="w-[36vw] mb-[10vh] flex-con-end place-items-end">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Search Result Page</div>
			<div class="w-[32vw] mt-[1vh] text-right">
				Displays the result optimized by keywords counting based on Google.
			</div>
		</div>
		<img :src="result" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import result from '~/assets/images/lets-beat-google/showcase/result.png?url'
</script>
