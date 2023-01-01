<template>
	<div class="w-screen h-[8vh] bg-base sticky top-0 flex place-items-center z-10">
		<Navigationbar />
	</div>

	<div
		class="w-1 absolute top-0 right-[4vw] bg-base-content animate-[upper-line-down_1s_ease-in-out_forwards] z-20"
	/>
	<div
		class="h-1 absolute top-[8vh] right-0 bg-base-content animate-[line-to-left_1s_ease-in-out_forwards]"
	/>
	<div class="w-[100vw] h-[87vh] flex antialiased">
		<NuxtPage class="m-auto" />
	</div>
	<Footer />
</template>

<script setup></script>
<style>
@keyframes upper-line-down {
	0% {
		height: 0;
	}
	100% {
		height: 40%;
	}
}

@keyframes line-to-left {
	0% {
		width: 0;
	}
	100% {
		width: 65%;
	}
}
</style>
