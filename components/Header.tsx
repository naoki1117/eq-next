import { InformationCircleIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <>
        <Link href="/information">
            <InformationCircleIcon className='h-5 w-5 cursor-pointer'/>
        </Link>
        <p className="">備品管理システム</p>
        <div className='h-[20px] bg-indigo-500'></div>
    </>
  )
}


