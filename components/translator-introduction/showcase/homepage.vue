<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Home Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">A little surprise for the viewers.</div>
		</div>
		<img :src="homepage" class="img-size" />
	</div>
</template>

<script setup>
import homepage from '~/assets/images/translator-introduction/homepage.png?url'
</script>
