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
      <h1>Hello {{ user.username }}!</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </authenticator>
</template>


<!-- <script lang="ts" setup>
// import '@aws-amplify/ui-vue/styles.css';

// const queryGet = gql`
// 	query Query($messageId: ID!) {
// 		message(id: $messageId) {
// 			createdBy
// 			text
// 		}
// 	}
// `

// const queryMessages = gql`
// 	query Messages {
// 		messages {
// 			createdBy
// 			text
// 		}
// 	}
// `
// const mutationAdd = gql`
// 	mutation Mutation($messageInput: MessageInput) {
// 		createMessage(messageInput: $messageInput) {
// 			text
// 			createdBy
// 		}
// 	}
// `

// const subscriptionQuery = gql`
//   subscription {
//     messageCreated {
//       createdBy
//       text
//     }
//   }
// `

// type Message = {
// 	text: string,
// 	createdBy: string
// }
// type Messages = {
// 	messages: Message[]
// }

// type SubscriptionMessage = {
// 	messageCreated: Message
// }

// const { result, onResult, onError, loading } = useSubscription<SubscriptionMessage>(subscriptionQuery);
// onResult((r) => {
// 	result.value = r.data;
// 	refetch();
// });

// onError((e) => {
// 	console.log(e);
// });

// const input = ref<string>("");
// const { mutate: mutateAdd } = useMutation<Message>(mutationAdd);
// const { result: messages, refetch, loading: load } = useLazyQuery<Messages>(queryMessages)
// 	refetch();
// console.log(messages.value)

// watch(messages, (v) => (messages.value = v));
// const add = async () => {

// 	const newsMessageInput = {
// 		text: input.value,
// 		username: 'name2',
// 	}
// 	// データの追加

// 	const { data: createdData } = await mutateAdd({ messageInput: newsMessageInput });
// 	console.log(createdData);
// 	// データの更新
// 	// await useAsyncQuery(queryGet, variables)
// }
</script> -->