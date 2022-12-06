<template>
	<div class="w-full h-max bg-base sticky top-0 pt-[4vh] z-10">
		<NavigationBar />
		<div class="w-full h-[3vh] bg-base">
			<div
				class="h-1 absolute top-[10vh] right-0 bg-base-content animate-[line-to-left-in-work_1s_ease-in-out_forwards]"
			/>
		</div>
	</div>
	<NuxtPage />
	<div class="w-full h-max bg-base sticky bottom-0">
		<Footer />
		<div class="h-[0.5vh]"></div>
	</div>
</template>

<script setup></script>

<style lang="scss">
@keyframes line-to-left-in-work {
	0% {
		width: 0;
	}
	100% {
		width: 91%;
	}
}
</style>
