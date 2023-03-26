import { Title } from '@mantine/core'
import React from 'react'

export const Link = () => {
  return (
    <div className="col-span-1 border-1-double">
        <Title order={4}>外部リンク</Title>
        <a href="https://realtime-remind.vercel.app/" className='no-underline text-gray-500 mt-2 cursor-pointer'>remindapp</a>
    </div>
  )
}

