<template>
	<div class="my-[20vh] showcase-basic">
		<div class="mb-[10vh] flex-con-end place-items-end mx-[5vw]">
			<div class="text-6xl gradient-text flex-con-end place-items-end">
				<div>Change</div>
				<div>Password</div>
			</div>
			<div class="w-[40vw] mt-[1vh] text-right">
				Change the login password stored in the system.
			</div>
		</div>
		<img :src="ChangePassword" class="img-size" />
	</div>
</template>

<script setup>
import ChangePassword from '~/assets/images/score-calculator/change-password.png?url'
</script>
