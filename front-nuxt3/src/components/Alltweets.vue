<template>
	<template v-for="tweet in tweetStore.tweets">
		<v-card width="400" :subtitle=userStore.email :text=tweet.description></v-card>
	</template>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useTweetStore } from "@/stores/tweet";

const userStore=useUserStore();
const tweetStore = useTweetStore()

</script>