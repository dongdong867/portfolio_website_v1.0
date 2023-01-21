<template>
	<div class="mb-[20vh] mt-[10vh] showcase-basic">
		<div class="mb-[10vh] pl-[10vw] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Account Page</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Account page, the wallet button can navigate users to the wallet page.
			</div>
		</div>
		<img :src="account" class="img-size place-items-center" />
	</div>
</template>

<script setup>
import account from '~/assets/images/tricargo/showcase/account.png?url'
</script>
