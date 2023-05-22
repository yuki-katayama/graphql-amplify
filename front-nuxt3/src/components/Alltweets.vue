<template>
	<template v-for="tweet in tweetStore.tweets">
		<v-card width="400" :subtitle=tweet.name :text=tweet.description></v-card>
	</template>
</template>

<script setup lang="ts">
import { useTweetStore } from "@/stores/tweet";

const tweetStore = useTweetStore()

</script>