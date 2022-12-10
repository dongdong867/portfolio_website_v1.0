<template>
	<div class="mt-[25vh]">
		<div class="w-[70vw] m-auto text-5xl pl-[2vw] pb-[5vh] snap-start snap-always">Showcase</div>
		<div class="w-screen flex snap-center my-[5vh]">
			<div class="flex flex-col mb-[10vh] place-content-end place-items-end">
				<div class="text-6xl leading-tight flex flex-col place-items-end">
					<div class="w-max gradient-text">Check and</div>
					<div class="w-max gradient-text">Calculate</div>
				</div>
				<div class="w-[40vw] mt-[1vh] text-right">
					Input answers and calculat scores automatically.
				</div>
			</div>
			<img :src="CheckAndCalculate" class="h-[60vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen mt-[40vh] flex snap-end snap-always">
			<div class="flex flex-col mb-[10vh] place-content-end place-items-end">
				<div class="text-6xl leading-tight flex flex-col place-items-end">
					<div class="w-max gradient-text">Search</div>
					<div class="w-max gradient-text">(Student ver.)</div>
				</div>
				<div class="w-[40vw] text-right mt-[1vh]">Access to search scores of him or herself.</div>
			</div>
			<img :src="StudentSearch" class="h-[60vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen mt-[40vh] flex snap-end snap-always">
			<div class="flex flex-col mb-[10vh] place-content-end place-items-end">
				<div class="text-6xl leading-tight flex flex-col place-items-end">
					<div class="w-max gradient-text">Search</div>
					<div class="w-max gradient-text">(Teacher ver.)</div>
				</div>
				<div class="w-[40vw] mt-[1vh] text-right">Access to search scores of all students.</div>
			</div>
			<img :src="TearchSearch" class="h-[60vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen flex mt-[40vh] snap-end snap-always">
			<div class="flex flex-col mb-[10vh] place-content-end place-items-end">
				<div class="text-6xl leading-tight flex flex-col place-items-end">
					<div class="w-max gradient-text">Change</div>
					<div class="w-max gradient-text">Password</div>
				</div>
				<div class="w-[40vw] mt-[1vh] text-right">
					Change the login password stored in the system.
				</div>
			</div>
			<img :src="ChangePassword" class="h-[60vh] m-auto ml-[5vw]" />
		</div>
		<div class="w-screen flex mt-[40vh] mb-[5vh] snap-end snap-always">
			<div class="flex flex-col mb-[10vh] place-content-end place-items-end">
				<div class="text-6xl leading-tight flex flex-col place-items-end">
					<div class="w-max gradient-text">Files</div>
					<div class="w-max gradient-text">Building</div>
				</div>
				<div class="w-[40vw] mt-[1vh] text-right">
					Create a student file and stored in the system.
				</div>
			</div>
			<img :src="Building" class="h-[60vh] m-auto ml-[5vw]" />
		</div>
	</div>
</template>

<script setup>
import CheckAndCalculate from '~/assets/images/score-calculator/check.png?url'
import StudentSearch from '~/assets/images/score-calculator/student-search.png?url'
import TearchSearch from '~/assets/images/score-calculator/teacher-search.png?url'
import ChangePassword from '~/assets/images/score-calculator/change-password.png?url'
import Building from '~/assets/images/score-calculator/create.png?url'
</script>
