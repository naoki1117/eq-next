import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'
import {useRouter} from "next/router"
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/solid'
import { UserInfo } from '../components/UserInfo'
import { useQueryClient } from '@tanstack/react-query'
import { EqForm } from '../components/EqForm'
import { EqList } from '../components/EqList'

const Dashboard:NextPage = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const logout = async () => {
        queryClient.removeQueries(["eqs"])
        queryClient.removeQueries(["user"])
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
        router.push("/")        
    }
  return (
    <Layout title='備品管理コンソール'>
        <LogoutIcon
            className='mb-6 h-6 w-6 cursor-pointer text-blue-500 fixed top-0 left-1/2'
            onClick={logout}
        />
        <UserInfo/>
        <div className='h-[20px] mt-10 bg-indigo-500'></div>
        <div className='flex space-x-32'>
          <EqForm/>
          <EqList/>
        </div>
    </Layout>
  )
}

export default Dashboard