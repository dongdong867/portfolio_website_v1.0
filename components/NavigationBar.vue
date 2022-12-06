<template>
	<div
		class="w-[80%] h-[4vh] flex m-auto place-content-between place-items-start font-bold text-xl"
	>
		<div>DONG</div>
		<div class="w-max flex gap-x-10">
			<nuxt-link to="../" class="group basis-1/3">
				HOME
				<div class="hover-transition" />
			</nuxt-link>
			<nuxt-link to="../about" class="group basis-1/3">
				ABOUT
				<div class="hover-transition" />
			</nuxt-link>
			<nuxt-link to="../works" class="group basis-1/3">
				WORKS
				<div class="hover-transition" />
			</nuxt-link>
		</div>
	</div>
</template>
<script setup></script>
<style scoped>
.hover-transition {
	@apply w-0 h-1 mt-1 m-auto relative bg-base-content transition-all duration-300 group-hover:w-full;
}
</style>
