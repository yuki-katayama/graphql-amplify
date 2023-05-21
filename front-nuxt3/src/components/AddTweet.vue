<template>
	<v-textarea label="Label" v-model="description"></v-textarea>
	{{ description }}
	<v-btn @click="add">
		Button
	</v-btn>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { API } from 'aws-amplify'
import { createTodo } from "@/graphql/mutations"
import { CreateTodoInput, CreateTodoMutation } from "@/API"
import { GraphQLQuery } from '@aws-amplify/api';
import { useUserStore } from "@/stores/user"

const user=useUserStore();
const description = ref<string>("");
const add= async () => {
	// console.log(user.getMail)
	const newTodo=await API.graphql<GraphQLQuery<CreateTodoMutation>>(
		{
			query: createTodo,
			variables: { input: { name: user.email, description: description.value } as CreateTodoInput },
		}
	)
}
</script>