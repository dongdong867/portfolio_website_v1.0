<template>
	<div class="my-[10vh] showcase-basic -ml-[25vw]">
		<img :src="MacbookDisplay" class="img-size" />
		<div class="flex-con-end mb-[20vh] ml-[5vw]">
			<div class="text-6xl gradient-text">
				<div>Deatils</div>
				<div>Display Area</div>
			</div>
			<div class="w-[40vw] mt-[1vh]">Shows futher information of chosen job.</div>
		</div>
	</div>
</template>

<script setup>
import MacbookDisplay from '~/assets/images/nccu-job-bank/showcase/macbook.png?url'
</script>
