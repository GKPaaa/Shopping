import { defineStore } from "pinia";
import request from "@/utils/request";
import { ICategoryItem, IApiRes } from "@/types";
export const useCategoryStore = defineStore("category", {
  state: () => ({
    list: [] as ICategoryItem[],
  }),
  actions: {
    async getAllCategory() {
      const res = await request.get<IApiRes<ICategoryItem[]>>(
        "/home/category/head"
      );
      res.data.result.forEach((item) => (item.open = false));
      this.list = res.data.result;
    },
  },
});
