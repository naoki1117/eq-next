import React from 'react'
import { useQueryEqs } from '../hooks/useQueryEqs'
import { List,ThemeIcon,Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import {EqItem} from "./EqItem"
import { AugmentedReality } from 'tabler-icons-react';

export const EqList = () => {
    const {data: eqs, status} =useQueryEqs()
    if (status === "loading") return <Loader my="lg" color="cyan" className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'/>
  return (
    <div className='col-span-3'>
        <List
            my="lg"
            spacing="sm"
            size="md"
            icon={
                <AugmentedReality
                    size={30}
                    strokeWidth={2}
                    color={'#40a4bf'}
                 />
                
            }
        >
            {eqs?.map((eq) => (
                <EqItem
                    key={eq.id}
                    id={eq.id}
                    name={eq.name}
                    category={eq.category}
                    description={eq.description}
                    createdAt={eq.createdAt}
                    updatedAt={eq.updatedAt}
                    quantity={eq.quantity}
                    limitCount={eq.limitCount}
                />
            ))}
        </List>
    </div>
  )
}


