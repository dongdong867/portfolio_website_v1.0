<template>
	<div class="w-full h-max bg-base sticky top-0 pt-[4vh] z-10">
		<NavigationBar />
		<div class="w-full h-[3vh] bg-base">
			<div
				class="h-1 absolute top-[10vh] right-0 bg-base-content animate-[line-to-left-in-work_1s_ease-in-out_forwards]"
			/>
		</div>
	</div>

	<div class="w-full h-[90vh] flex flex-col m-auto mb-3 antialiased">
		<div class="text-7xl font-extrabold mt-[4vh] ml-[10vw]">WORKS</div>
		<div class="grow m-auto mt-10">
			<NuxtPage />
		</div>
		<Footer />
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
