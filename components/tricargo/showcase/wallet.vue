<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Wallet Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">Wallet page but without cash flow.</div>
		</div>
		<img :src="wallet" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import wallet from '~/assets/images/tricargo/showcase/wallet.png?url'
</script>
