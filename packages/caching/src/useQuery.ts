import { useQuery as useTanStackQuery } from '@tanstack/react-query'

export const useQuery = (props) => {
  return useTanStackQuery(props)
}
