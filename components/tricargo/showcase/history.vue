<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>History Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Displays the parking history and cost of the user.
			</div>
		</div>
		<img :src="history" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import history from '~/assets/images/tricargo/showcase/history.png?url'
</script>
