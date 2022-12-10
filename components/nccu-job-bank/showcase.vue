<template>
	<div class="mt-[20vh]">
		<div class="w-[70vw] m-auto pl-[2vw] text-5xl snap-start snap-always">Showcase</div>
		<div class="my-[10vh]">
			<img :src="HomePage" class="h-[60vh] m-auto my-[5vh]" />
		</div>
		<div class="w-screen flex snap-center snap-always my-[5vh]">
			<div class="flex flex-col place-content-end place-items-end mb-[20vh] ml-[5vw]">
				<div class="flex flex-col place-items-end text-6xl leading-tight gradient-text">
					<div class="w-max">Part-time</div>
					<div class="w-max">Jobs List</div>
				</div>
				<div class="w-[40vw] mt-[1vh] text-right">
					Displays breif informations of part-time jobs.
				</div>
			</div>
			<img :src="MacbookDisplay" class="h-[75vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen my-[10vh] -ml-[25vw] flex snap-center snap-always">
			<img :src="MacbookDisplay" class="h-[75vh] m-auto" />
			<div class="flex flex-col place-content-end mb-[20vh] ml-[5vw]">
				<div class="text-6xl leading-tight">
					<div class="w-max gradient-text">Deatils</div>
					<div class="w-max gradient-text">Display Area</div>
				</div>
				<div class="w-[40vw] mt-[1vh]">Shows futher information of chosen job.</div>
			</div>
		</div>
		<div class="w-screen my-[10vh] flex snap-center snap-always">
			<div class="flex flex-col place-content-end place-items-end ml-[5vw] mb-[20vh]">
				<div class="w-max text-6xl leading-tight gradient-text">Collection List</div>
				<div class="w-max text-right">Display part-time jobs in user colection list.</div>
			</div>
			<img :src="Collection" class="h-[75vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen my-[10vh] -ml-[20vw] flex place-items-end snap-center snap-always">
			<img :src="Profile" class="h-[75vh] m-auto" />
			<div class="mb-[20vh] ml-[5vw]">
				<div class="text-6xl leading-tight">
					<div class="w-max gradient-text">Self/ Company</div>
					<div class="w-max gradient-text">Profile Page</div>
				</div>
				<div class="w-[40vw] mt-[1vh]">Show personal and company information.</div>
			</div>
		</div>
		<img :src="MainPageWithBackground" class="h-[87vh] snap-end snap-always" />
	</div>
</template>
<script setup>
import MainPageWithBackground from '~/assets/images/nccu-job-bank/showcase/main.png?url'
import HomePage from '~/assets/images/nccu-job-bank/showcase/home-page.png?url'
import MacbookDisplay from '~/assets/images/nccu-job-bank/showcase/macbook.png?url'
import Collection from '~/assets/images/nccu-job-bank/showcase/collection.png?url'
import Profile from '~/assets/images/nccu-job-bank/showcase/profile.png?url'
</script>
