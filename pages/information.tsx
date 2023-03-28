import { NextPage } from 'next'
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Layout } from '../components/Layout'

const Information :NextPage = () => {
  return (
    <Layout title='information'>
        <Header/>
        <h1 className='inline'>アーキテクチャー</h1>
        <h2 className='border-b-2 border-red-300'>フロントエンド</h2>
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

