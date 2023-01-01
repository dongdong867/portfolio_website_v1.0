<template>
	<div class="pt-[5vh] snap-end snap-always">
		<div class="w-[50vw]">A webapp build by students in NCCU, and build for students in NCCU.</div>
		<div
			class="work-button"
			@mouseenter="hoverOnButton = !hoverOnButton"
			@mouseleave="hoverOnButton = !hoverOnButton"
		>
			<a
				href="https://www.opennccu.com/"
				target="_blank"
				class="flex place-items-baseline gap-x-[1vw]"
			>
				<div
					:class="[{ 'animate-[link-hover-bounce_1s_infinite]': hoverOnButton }]"
					class="text-3xl"
				>
					→
				</div>
				<div>Go to site</div>
			</a>
		</div>
	</div>
</template>

<script setup>
const hoverOnButton = ref(false)
</script>
