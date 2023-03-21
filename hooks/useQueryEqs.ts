import { useRouter } from 'next/router'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Equipment } from '@prisma/client'

export const useQueryEqs = () => {
  const router = useRouter()
  const getEqs = async () => {
    const { data } = await axios.get<Equipment[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/equipment`
    )
    return data
  }
  return useQuery<Equipment[], Error>({
    queryKey: ['eqs'],
    queryFn: getEqs,
    onError: (err: any) => {
      if (err.response.status === 401 || err.response.status === 403)
        router.push('/')
    },
  })
}
