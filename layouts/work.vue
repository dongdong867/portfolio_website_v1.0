<template>
	<div class="w-screen h-[8vh] bg-base sticky top-0 flex place-items-center z-10">
		<NavigationBar />
	</div>
	<div
		class="h-1 absolute top-[8vh] right-0 bg-base-content animate-[line-to-left-in-work_1s_ease-in-out_forwards]"
	/>
	<div class="w-screen h-[87vh] antialiased">
		<NuxtPage class="m-auto" />
	</div>
	<Footer />
</template>

<script setup></script>

<style lang="scss"></style>
