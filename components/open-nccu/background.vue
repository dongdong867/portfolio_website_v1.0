<template>
	<div class="w-[70vw] mt-[20vh] m-auto">
		<div class="border-l-8 p-[2vw] mb-[8vh]">
			<div class="mb-20 text-5xl font-extrabold">Background</div>
			<div>
				As a member of gen Z, Open NCCU team gathers a group of students in NCCU, attempt to
				renovate and rebuild the user unfriendly systems in our school. Our goal is to offer a user
				friendly system that really meets the need of NCCU students.
			</div>
		</div>
		<div class="flex place-content-end pb-[10vh] snap-end snap-always">
			<img
				class="w-[15vw] p-[3vw] -mr-[2vw] rounded-[30px] border-2 skew-y-12 cursor-none transition-all duration-200 shadow-2xl hover:skew-y-0 hover:mr-[4vw]"
				:src="OpenNCCUStrokeIcon"
			/>
			<img
				class="w-[15vw] p-[3vw] -mr-[2vw] rounded-[30px] border-2 skew-y-12 cursor-none transition-all duration-200 shadow-2xl z-[3] hover:skew-y-0 hover:mx-[4vw]"
				:src="OpenNCCUBlackIcon"
			/>
			<img
				class="w-[15vw] p-[3vw] -mr-[2vw] rounded-[30px] border-2 skew-y-12 cursor-none transition-all duration-200 drop-shadow-[10px_25px_20px_rgba(255,255,255,0.30)] shadow-2xl z-[2] hover:skew-y-0 hover:mx-[4vw]"
				:src="OpenNCCUIcon"
			/>
			<img
				class="w-[15vw] p-[3vw] -mr-[2vw] rounded-[30px] border-2 bg-base-content skew-y-12 cursor-none transition-all duration-200 drop-shadow-[10px_25px_20px_rgba(255,255,255,0.20)] shadow-2xl z-[1] hover:skew-y-0 hover:mx-[4vw]"
				:src="OpenNCCUIcon"
			/>
		</div>
	</div>
</template>

<script setup>
import OpenNCCUIcon from '~/assets/icons/open-nccu/logo.svg?url'
import OpenNCCUStrokeIcon from '~/assets/icons/open-nccu/logo-stroke.svg?url'
import OpenNCCUBlackIcon from '~/assets/icons/open-nccu/logo-black.svg?url'

const hoverOnLogo = ref(false)
</script>

<style lang="scss" scoped></style>
