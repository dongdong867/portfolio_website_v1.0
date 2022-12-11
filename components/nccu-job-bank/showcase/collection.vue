<template>
	<div class="my-[10vh] showcase-basic">
		<div class="flex-con-end place-items-end mx-[5vw] mb-[20vh]">
			<div class="text-6xl gradient-text">Collection List</div>
			<div class="w-[40vw] mt-[1vh] text-right">Display part-time jobs in user colection list.</div>
		</div>
		<img :src="Collection" class="img-size" />
	</div>
</template>

<script setup>
import Collection from '~/assets/images/nccu-job-bank/showcase/collection.png?url'
</script>
