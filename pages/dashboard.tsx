import { NextPage } from 'next'
import React, { useState } from 'react'
import { Layout } from '../components/Layout'
import {useRouter} from "next/router"
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/solid'
import { UserInfo } from '../components/UserInfo'
import { useQueryClient } from '@tanstack/react-query'
import { EqForm } from '../components/EqForm'
import { EqList } from '../components/EqList'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Cloudinaries } from '../components/Cloudinaries'
import { Button } from '@mantine/core'

const Dashboard:NextPage = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const logout = async () => {
        queryClient.removeQueries(["eqs"])
        queryClient.removeQueries(["user"])
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
        router.push("/")        
    }
    const [toggle,setToggle] = useState(false)
  return (
    <Layout title='備品管理コンソール'>
        <LogoutIcon
            className='mb-6 h-6 w-6 cursor-pointer text-blue-500 fixed top-0 left-1/2'
            onClick={logout}
        />
        <UserInfo/>
        <Header/>
        <div className='grid grid-cols-4 gap-4 h-full'>
          <EqForm/>
          <EqList/>
        </div>
        <Button
        onClick={() => setToggle(!toggle)}
        >
          開/閉
        </Button>
        {toggle ? <Cloudinaries toggle={toggle} setToggle={setToggle}/> : <p>マップを表示するには上のボタンを押下してください。</p>}
        
        <Footer/>
    </Layout>
  )
}

export default Dashboard
