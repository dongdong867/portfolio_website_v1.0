<template>
	<div class="w-full h-[8vh] bg-base sticky top-0 flex z-10">
		<Navigationbar />
	</div>
	<div
		class="h-1 absolute top-[8vh] right-0 bg-base-content animate-[line-to-left-in-work_1s_ease-in-out_forwards]"
	/>

	<div class="w-screen h-full flex flex-col m-auto mb-[1.5vh] antialiased">
		<div class="text-7xl font-extrabold mt-[4vh] ml-[10vw]">WORKS</div>
		<div class="grow m-auto my-[10vh]">
			<NuxtPage />
		</div>
		<Footer />
	</div>
</template>
