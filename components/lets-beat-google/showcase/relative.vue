<template>
	<div class="mb-[20vh] mt-[10vh] gap-x-[2vw] showcase-basic">
		<div class="w-[36vw] mb-[10vh] flex-con-end place-items-end">
			<div class="text-6xl gradient-text flex-con-end place-items-end">Relative Keywords</div>
			<div class="w-[32vw] mt-[1vh] text-right">
				Displays the relatve keywords fetched from Google search result page.
			</div>
		</div>
		<img :src="relative" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import relative from '~/assets/images/lets-beat-google/showcase/relative.png?url'
</script>
