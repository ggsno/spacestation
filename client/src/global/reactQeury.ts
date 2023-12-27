import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
    mutations: {
      throwOnError: (err) =>
        err instanceof AxiosError && err.response?.status == 401,
    },
  },
});

export const queryKeys = {
  category: "CATEGORY",
  follow: "FOLLOW",
  user: "USER",
  findUsers: "FIND_USERS",
  feedMain: "FEED_MAIN",
  feedProfile: "FEED_PROFILE",
  feedCategory: "FEED_CATEGORY",
  feedBookmark: "FEED_BOOKMARK",
  feedSearch: "FEED_SEARCH",
  comment: "COMMENT",
  like: "LIKE",
  bookmark: "BOOKMARK",
};
