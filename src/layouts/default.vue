<script setup lang="ts">
import "@aws-amplify/ui-vue/styles.css";
import { toRefs, ref, watch } from 'vue';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-vue';
import { useUserStore } from "@/stores/user";

Amplify.configure(awsconfig);

const drawer=ref(true);
const rail=ref(true);
const { route, user, signOut } = toRefs(useAuthenticator());
watch(user, () => {
	if (user.value !== undefined) {
		const userStore = useUserStore();
		userStore.user = user.value;
	}
})

const item = ref<string>("home");
</script>

<template>
	<authenticator>
		<template v-slot="{ user, signOut }">
			<v-card>
				<v-layout>
					<v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail=false">
						<v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" :title="user.username"
							nav>
							<template v-slot:append>
								<v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail=!rail"></v-btn>
							</template>
						</v-list-item>
						<v-divider></v-divider>
						<v-list density="compact" nav>
							<v-list-item @click="item = 'home'" prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
							<v-list-item @click="item = 'account'" prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
							<v-list-item @click="item = 'users'" prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
						</v-list>
						<template v-slot:append>
							<div class="pa-2">
								<v-btn block @click="signOut">
									Logout
								</v-btn>
							</div>
						</template>
					</v-navigation-drawer>
					<v-main>
						<slot />
					</v-main>
				</v-layout>
			</v-card>
		</template>
	</authenticator>
</template>