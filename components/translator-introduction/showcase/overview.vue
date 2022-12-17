<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Overview Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">Brief features of different translators.</div>
		</div>
		<img :src="overview" class="img-size" />
	</div>
</template>

<script setup>
import overview from '~/assets/images/translator-introduction/overview.png?url'
</script>
