<template>
	<div class="mb-[20vh] mt-[10vh] gap-x-[2vw] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Home Page</div>
			</div>
			<div class="w-[36vw] mt-[1vh] text-right">The home page of the search engine.</div>
		</div>
		<img :src="homepage" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import homepage from '~/assets/images/lets-beat-google/showcase/homepage.png?url'
</script>
