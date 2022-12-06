<template>
	<div class="w-full h-full bg-base sticky top-0 pt-10 z-10">
		<NavigationBar />
	</div>

	<div class="w-full h-[90vh] flex flex-col m-auto mb-3 antialiased">
		<div class="grow m-auto mt-10">
			<NuxtPage />
		</div>
		<Footer />
	</div>
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
