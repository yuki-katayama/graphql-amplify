import { type _GettersTree, type _ActionsTree } from "pinia";

export interface userGetterModel extends _GettersTree<any> {
  email: (state: any) => string;
  name: (state: any) => string;
}

export interface OptionActionModel extends _ActionsTree {
}

export const useUserStore = defineStore<
  string,
  {user: any},
  userGetterModel
>("user", {
  state: () => ({
	user: null,
  }),
  getters: {
    email: (state) => state.user.signInUserSession.idToken.payload.email ?? null,
    name: (state) => state.user.username?? null,
  },
  actions: {
  },
});
