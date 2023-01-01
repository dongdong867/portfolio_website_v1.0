<template>
	<div class="my-[10vh] showcase-basic">
		<div class="flex-con-end place-items-end mb-[20vh] mx-[5vw]">
			<div class="flex-con-end place-items-end text-6xl gradient-text">
				<div>Part-time</div>
				<div>Jobs List</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">Displays breif informations of part-time jobs.</div>
		</div>
		<img :src="MacbookDisplay" class="img-size" />
	</div>
</template>

<script setup>
import MacbookDisplay from '~/assets/images/nccu-job-bank/showcase/macbook.png?url'
</script>
