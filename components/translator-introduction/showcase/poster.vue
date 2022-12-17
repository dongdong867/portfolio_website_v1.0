<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Poster Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Showing the poster we made for the presentation.
			</div>
		</div>
		<img :src="poster" class="img-size" />
	</div>
</template>

<script setup>
import poster from '~/assets/images/translator-introduction/poster.png?url'
</script>
