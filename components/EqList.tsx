import React from 'react'
import { useQueryEqs } from '../hooks/useQueryEqs'
import { List,ThemeIcon,Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import {EqItem} from "./EqItem"
import { TagIcon } from '@heroicons/react/solid'

export const EqList = () => {
    const {data: eqs, status} =useQueryEqs()
    if (status === "loading") return <Loader my="lg" color="cyan"/>
  return (
    <div className='col-span-3'>
        <List
            my="lg"
            spacing="sm"
            size="md"
            icon={
                <TagIcon fontSize={16} color='cyan'/> 
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
                />
            ))}
        </List>
    </div>
  )
}


