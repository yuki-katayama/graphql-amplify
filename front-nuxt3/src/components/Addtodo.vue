<template>
	<v-btn @click="add">
		Button
	</v-btn>
	<template v-if="createSubRef">
		{{ createSubRef }}
	</template>
</template>

<script setup lang="ts">
import { API, graphqlOperation } from 'aws-amplify'
import { createTodo } from "@/graphql/mutations"
import { onCreateTodo } from "@/graphql/subscriptions"
import { CreateTodoInput, CreateTodoMutation, OnCreateTodoSubscription } from "@/API"
import { GraphQLQuery, GraphQLSubscription } from '@aws-amplify/api';
const createSubRef = ref<OnCreateTodoSubscription | null>(null);

const add = async () => {
	console.log("aa")
	const newTodo = await API.graphql<GraphQLQuery<CreateTodoMutation>>(
		{
        query: createTodo,
        variables: { input: {name: "yuki"} },
		}
	)
}

// サブスクリプションの設定
const createSub = API.graphql<GraphQLSubscription<OnCreateTodoSubscription>>(
  graphqlOperation(onCreateTodo)
).subscribe({
	next: (data: any) => {
    // サブスクリプションの通知を処理する
	console.log(data.value.data.onCreateTodo);
    createSubRef.value = data.value.data.onCreateTodo as OnCreateTodoSubscription
    console.log("New Todo created:", createSubRef.value)
  },
  error: (error: any) => {
    console.error("Subscription error:", error)
  },
  complete: () => {
	console.log("unsubscribed");
  }
})

// コンポーネントが破棄される際にサブスクリプションを解除する
onUnmounted(() => {
  subscription.unsubscribe()
})
</script>