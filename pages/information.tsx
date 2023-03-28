import { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

const Information :NextPage = () => {
  return (
    <Layout title='information'>
        <Header/>
        <h1>アーキテクチャー</h1>
        <h2 className='relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-600'>フロントエンド</h2>
        <ul>
            <li>nextjs&typescript</li>
            <li>tailwindcss</li>
            <li>mantine ui</li>
            <li>reactQuery</li>
            <li>zustand</li>
            <li>and more...</li>
        </ul>
        <br />
        <h2>バックエンド</h2>
        <ul>
            <li>nodejs&typescript</li>
            <li>nestjs</li>
            <li>prisma</li>
            <li>and more...</li>
        </ul>
        <br />
        <h2>サーバー</h2>
        <ul>
            <li>webサーバ⇒vercel</li>
            <li>applicationサーバ⇒heroku</li>
            <li>DB⇒postgresql</li>
        </ul>
        <Footer/>
    </Layout>
  )
}

export default Information

