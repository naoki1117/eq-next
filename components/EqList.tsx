import React from 'react'
import { useQueryEqs } from '../hooks/useQueryEqs'
import { List,ThemeIcon,Loader } from '@mantine/core'
import { IconCircleDashed } from '@tabler/icons'
import {EqItem} from "./EqItem"

export const EqList = () => {
    const {data: eqs, status} =useQueryEqs()
    if (status === "loading") return <Loader my="lg" color="cyan"/>
  return (
    <div className='basis-2/4'>
        <List
            my="lg"
            spacing="sm"
            size="sm"
            icon={
                <ThemeIcon color="cyan">
                    <IconCircleDashed size={16}/>
                </ThemeIcon>
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


