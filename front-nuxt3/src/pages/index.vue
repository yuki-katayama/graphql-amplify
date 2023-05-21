<script setup>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);
</script>

<template>
	<authenticator>
		<template v-slot="{ user, signOut }">
			<h1>Hello {{user.username}}!</h1>
			<addtodo />
			<v-btn @click="signOut">Sign Out</v-btn>
		</template>
	</authenticator>
</template>