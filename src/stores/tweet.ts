import { type _GettersTree, type _ActionsTree } from "pinia";

export interface userGetterModel extends _GettersTree<any> {
}

export interface OptionActionModel extends _ActionsTree {
}

export const useTweetStore = defineStore<
  string,
  {tweets: any},
  userGetterModel
>("user", {
  state: () => ({
	tweets: null,
  }),
  getters: {
  },
  actions: {
  },
});
