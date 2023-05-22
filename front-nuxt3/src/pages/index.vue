<script setup lang="ts">
import { ref, onUnmounted, watch } from "vue"
import { OnCreateTodoSubscription, GetTodoQuery } from "@/API"
import { API, graphqlOperation } from 'aws-amplify'
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
import { onCreateTodo } from "@/graphql/subscriptions"
import { useTweetStore } from "@/stores/tweet"
import { listTodos } from "@/graphql/queries"

const tweetStore=useTweetStore()

/**
 * Queries
 */
const tweets=ref<any>("");
const updateTweets = async () => {
	tweets.value=await API.graphql<GraphQLQuery<GetTodoQuery>>(
		{
			query: listTodos,
			variables: {
				sortField: "createdAt",
				sortDirection: "DESC"
			}
		},
	)
	tweetStore.tweets=tweets.value.data.listTodos.items;
}
updateTweets();

/**
 * Subscriptions
 */
const createSub=API.graphql<GraphQLSubscription<OnCreateTodoSubscription>>(
	graphqlOperation(onCreateTodo)
).subscribe({
	next: (data: any) => {
		// サブスクリプションの通知を処理する
		updateTweets();
	},
	error: (error: any) => {
		console.error("Subscription error:", error)
	},
	complete: () => {
		console.log("unsubscribed");
	}
})

/**
 * unMounted Subscriptions
 */
onUnmounted(() => {
	console.log("onUnmounted")
	createSub.unsubscribe()
})
</script>

<template>
	<alltweets />
	<addTweet />
</template>