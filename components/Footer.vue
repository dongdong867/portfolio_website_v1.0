<template>
	<div class="w-full mt-[2vh]">
		<div class="w-screen h-1 relative bottom-[5%] left-0 bg-base-content z-10" />
		<div class="w-[90%] flex justify-end gap-x-3 mt-3 mb-3">
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
