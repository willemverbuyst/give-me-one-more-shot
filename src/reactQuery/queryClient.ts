import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     staleTime: 600000,
  //     cacheTime: 900000,
  //   },
  // },
})
