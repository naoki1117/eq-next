import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../components/Layout'

export const information :NextPage = () => {
  return (
    <Layout title='information'>
      <h1>アーキテクチャー</h1>
      <h2>フロントエンド</h2>
      <ul>
        <li>nextjs&typescript</li>
        <li>tailwindcss</li>
        <li>mantine ui</li>
        <li>reactQuery</li>
        <li>zustand</li>
        <li>zand more...</li>
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
        <li>application⇒heroku</li>
        <li>DB⇒postgresql</li>
      </ul>
    </Layout>
  )
}

