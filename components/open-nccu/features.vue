<template>
	<div class="w-max mt-[20vw] m-auto">
		<div class="w-max h-max mt-[2vw] gap-x-[1vw] flex snap-start snap-always">
			<div class="w-[45vh] h-[80vh] bg-neutral-800 rounded-[30px] cursor-none hover:bg-base-100">
				<img :src="OpenNCCUMainPage" class="h-[80vh] p-[2vw] aspect-auto m-auto" />
				<div
					class="w-full h-full static -mt-[80vh] rounded-[30px] flex place-items-center opacity-0 transition-all duration-200 hover:opacity-100 hover:backdrop-blur"
				>
					<div class="m-auto drop-shadow-[0_0_5px_#000]">Main Page</div>
				</div>
			</div>
			<div class="flex flex-col gap-[1vw]">
				<div class="flex gap-x-[1vw]">
					<div class="h-[35vh] space-y-[1vw]">
						<div
							class="w-[32vh] h-[17.5vh] bg-neutral-800 rounded-[30px] overflow-hidden cursor-none hover:bg-base-100"
						>
							<img :src="DownVoteIcon" class="h-[17.5vh] aspect-auto place-self-center" />
							<div
								class="w-full h-full staitc -mt-[17.5vh] rounded-[30px] flex place-items-center opacity-0 text-center transition-all duration-200 hover:opacity-100 hover:backdrop-blur"
							>
								<div class="m-auto drop-shadow-[0_0_5px_#000]">Downvote On Weather</div>
							</div>
						</div>
						<div class="w-[32vh] h-[17.5vh] bg-white rounded-[30px] overflow-hidden cursor-none">
							<img :src="LoginPage" class="w-[26vh] h-[17.5vh] m-auto pt-[2.5vh] rounded-[10px]" />
							<div
								class="w-[32vh] h-[17.5vh] static -mt-[17.5vh] flex place-items-center rounded-[30px] opacity-0 transition-all duration-200 hover:opacity-100 hover:backdrop-blur"
							>
								<div class="m-auto drop-shadow-[0_0_5px_#000]">Sign in with Google</div>
							</div>
						</div>
					</div>

					<div class="w-[40vh] h-[36.5vh] bg-neutral-800 rounded-[30px]">
						<div class="m-auto p-[2vh] py-[8.5vh]">
							<img
								:src="WeatherIcon"
								class="w-[36vh] p-[2vh] pt-[3vh] bg-base-content rounded-[10px]"
							/>
						</div>
						<div
							class="w-[40vh] h-[36.5vh] static -mt-[36.5vh] flex place-items-center rounded-[30px] transition-all duration-200 opacity-0 cursor-none hover:opacity-100 hover:backdrop-blur"
						>
							<div class="m-auto drop-shadow-[0_0_5px_#000]">Realtime Weather Report</div>
						</div>
					</div>
				</div>

				<div
					class="w-[73.5vh] h-[42vh] bg-neutral-800 rounded-[30px] cursor-none hover:bg-base-100"
				>
					<img
						:src="NextClassIcon"
						class="h-[42vh] pb-[1vh] px-[5.5vh] m-auto transition-all duration-200 hover:blur"
					/>
					<div
						class="w-[73.5vh] h-[42vh] static -mt-[42vh] flex place-items-center rounded-[30px] opacity-0 transition-all duration-200 hover:opacity-100 hover:backdrop-blur"
					>
						<div class="m-auto drop-shadow-[0_0_5px_#000]">Next Class Reminder</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import OpenNCCUMainPage from '~/assets/images/open-nccu/main-frame.png?url'
import DownVoteIcon from '~/assets/icons/open-nccu/downvote.svg?url'
import LoginPage from '~/assets/icons/open-nccu/login.svg?url'
import NextClassIcon from '~/assets/icons/open-nccu/next-class.svg?url'
import WeatherIcon from '~/assets/icons/open-nccu/weather.svg?url'

const hoverOnDownVote = ref(false)
</script>

<style lang="scss" scoped></style>
