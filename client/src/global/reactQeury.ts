import { QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

export const queryKeys = {
  // TODO: 프로젝트 구조를 보여주기위한 샘플 키임. 구조 잡히면 지우기.
  sample: "SAMPLE",
};