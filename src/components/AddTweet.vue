<template>
	<v-textarea label="つぶやき" v-model="description"></v-textarea>
	<v-btn @click="add">つぶやく</v-btn>
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
	await API.graphql<GraphQLQuery<CreateTodoMutation>>(
		{
			query: createTodo,
			variables: { input: { name: user.email, description: description.value } as CreateTodoInput },
		}
	)
	description.value = ""
}
</script>