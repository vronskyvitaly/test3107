import { useQuery } from '@tanstack/react-query'
import { fetchJokes } from '@/services/joke/service'

export const useFetchJokes = (searchTerm: string) => {
  const { data, isSuccess } = useQuery<any, Error>({
    queryKey: ['search', searchTerm],
    queryFn: () => fetchJokes(searchTerm),
    enabled: searchTerm.length >= 4,
    staleTime: 1500000,
    refetchOnWindowFocus: false,
    refetchOnMount: false
  })

  return { data, isSuccess }
}
