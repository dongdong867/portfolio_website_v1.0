<template>
	<div class="w-[80vw] mt-[30vh] m-auto">
		<div class="ml-[5vw] text-5xl font-bold mb-20 snap-start snap-always">What we have done</div>
		<div class="flex justify-center gap-x-[2vw]">
			<ScoreCalculatorFeaturesCheck @check-clicked="checkClicked" :hoverCheck="hoverCheck" />
			<ScoreCalculatorFeaturesSearch @search-clicked="searchClicked" :hoverSearch="hoverSearch" />
			<ScoreCalculatorFeaturesStore @store-clicked="storeClicked" :hoverStore="hoverStore" />
		</div>
		<div
			v-if="focusOnCheck || focusOnSearch || focusOnStore"
			class="w-[73vw] h-max mt-[2vw] p-[4vw] m-auto bg-base-100 rounded-[30px]"
		>
			<div v-if="focusOnCheck">
				<div class="text-4xl mb-[3vh]">Check and Calculate</div>
				<div class="font-semibold">
					The score calculator allows user to input answers and subject, the system will check and
					calculate the answers automatically.
				</div>
			</div>
			<div v-if="focusOnSearch">
				<div class="text-4xl mb-[3vh]">Searching</div>
				<div class="font-semibold">
					The score calculator system can find the score and the answer result of a student in
					specific subject by input student's id and the subject name.
				</div>
			</div>
			<div v-if="focusOnStore">
				<div class="text-4xl mb-[3vh]">Storeing</div>
				<div class="font-semibold">
					Score calculator includes a storage space simular to a database, by combining scores into
					a text file, it makes the process of searching more efficient.
				</div>
			</div>
		</div>
		<div class="w-[80vw] mt-[30vh] m-auto">
			<div class="ml-[5vw] text-5xl snap-start snap-always">Problems to Solve</div>
		</div>
	</div>
</template>

<script setup>
const focusOnCheck = ref(false)
const focusOnSearch = ref(false)
const focusOnStore = ref(false)
const hoverCheck = ref(false)
const hoverSearch = ref(false)
const hoverStore = ref(false)

function checkClicked() {
	focusOnCheck.value = !focusOnCheck.value
	focusOnSearch.value = false
	focusOnStore.value = false
}

function searchClicked() {
	focusOnSearch.value = !focusOnSearch.value
	focusOnCheck.value = false
	focusOnStore.value = false
}

function storeClicked() {
	focusOnStore.value = !focusOnStore.value
	focusOnCheck.value = false
	focusOnSearch.value = false
}
</script>

<style lang="scss">
@keyframes feature-box-down {
	0% {
		height: -100%;
	}
	100% {
		height: 100%;
	}
}
</style>
