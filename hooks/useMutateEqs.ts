import { useRouter } from 'next/router'
import axios from 'axios'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { Equipment } from '@prisma/client'
import useStore from '../store'
import { EditedEq } from '../types'

export const useMutateEq = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const reset = useStore((state) => state.resetEditedEq)

  const createEqMutation = useMutation(
    async (eq: Omit<EditedEq, 'id'>) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/equipment`,
        eq
      )
      return res.data
    },
    {
      onSuccess: (res) => {
        const previousEqs = queryClient.getQueryData<Equipment[]>(['eqs'])
        if (previousEqs) {
          queryClient.setQueryData(['eqs'], [res, ...previousEqs])
        }
        reset()
        alert('作成が完了しました。')
      },
      onError: (err: any) => {
        reset()
        if (err.response.status === 401 || err.response.status === 403) {
          router.push('/')
        }
      },
    }
  )
  const updateEqMutation = useMutation(
    async (eq: EditedEq) => {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/equipment/${eq.id}`,
        eq
      )
      return res.data
    },
    {
      onSuccess: (res, variables) => {
        const previousEqs = queryClient.getQueryData<Equipment[]>(['eqs'])
        if (previousEqs) {
          queryClient.setQueryData(
            ['eqs'],
            previousEqs.map((eq) => (eq.id === res.id ? res : eq))
          )
        }
        reset()
      },
      onError: (err: any) => {
        reset()
        if (err.response.status === 401 || err.response.status === 403) {
          router.push('/')
        }
      },
    }
  )
  const deleteEqMutation = useMutation(
    async (id: number) => {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/equipment/${id}`)
    },
    {
      onSuccess: (_, variables) => {
        const previousEqs = queryClient.getQueryData<Equipment[]>(['eqs'])
        if (previousEqs) {
          queryClient.setQueryData(
            ['eqs'],
            previousEqs.filter((eq) => eq.id !== variables)
          )
        }
        reset()
        alert('削除が完了しました。')
      },
      onError: (err: any) => {
        reset()
        if (err.response.status === 401 || err.response.status === 403) {
          router.push('/')
        }
      },
    }
  )

  return { createEqMutation, updateEqMutation, deleteEqMutation }
}
