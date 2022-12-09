<template>
	<div class="w-screen">
		<div class="h-1 relative bottom-[0.5vh] left-0 bg-base-content z-10" />
		<div class="w-[90vw] mt-[1vh] flex place-content-end gap-x-[0.5vw]">
			<a href="mailto: dongdong0867@gmail.com" target="_blank">
				<img :src="MailIcon" />
			</a>
			<a href="https://github.com/dongdong867" target="_blank">
				<img :src="GithubIcon" />
			</a>
			<div>Copyright © 2022 DONG</div>
		</div>
	</div>
</template>

<script setup>
import MailIcon from '~/assets/icons/mail.svg?url'
import GithubIcon from '~/assets/icons/github.svg?url'
</script>
