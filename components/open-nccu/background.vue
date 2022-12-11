<template>
	<div class="mt-[20vh] snap-center snap-always">
		<div class="work-border-l mb-[8vh]">
			<div class="text-5xl font-extrabold">Background</div>
			<div class="mt-[5vh]">
				As a member of gen Z, Open NCCU team gathers a group of students in NCCU, attempt to
				renovate and rebuild the user unfriendly systems in our school. Our goal is to offer a user
				friendly system that really meets the need of NCCU students.
			</div>
		</div>
		<div class="flex place-content-end">
			<img class="logo shadow-2xl" :src="OpenNCCUStrokeIcon" />
			<img class="logo z-[3]" :src="OpenNCCUBlackIcon" />
			<img class="logo z-[2]" :src="OpenNCCUIcon" />
			<img class="logo bg-base-content z-[1]" :src="OpenNCCUIcon" />
		</div>
	</div>
</template>

<script setup>
import OpenNCCUIcon from '~/assets/icons/open-nccu/logo.svg?url'
import OpenNCCUStrokeIcon from '~/assets/icons/open-nccu/logo-stroke.svg?url'
import OpenNCCUBlackIcon from '~/assets/icons/open-nccu/logo-black.svg?url'

const hoverOnLogo = ref(false)
</script>

<style scoped>
.logo {
	@apply w-[15vw] p-[3vw] -mr-[2vw] rounded-[30px] border-2 cursor-none skew-y-12 transition-all duration-200 drop-shadow-[0_0_5px_rgba(255,255,255,0.20)] shadow-2xl hover:skew-y-0 hover:mx-[4vw];
}
</style>
