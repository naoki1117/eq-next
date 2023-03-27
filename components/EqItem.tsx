import React,{FC,useState} from 'react'
import { List } from '@mantine/core'
import { PencilAltIcon,TrashIcon } from '@heroicons/react/solid'
import { Equipment } from '@prisma/client'
import useStore from '../store'
import { useMutateEq } from '../hooks/useMutateEqs'
import { format } from "date-fns"

export const EqItem:FC<Omit<Equipment, "userId">> = ({id,name,category,description,createdAt,updatedAt,quantity}) => {
    const update = useStore((state) => state.updateEditedEq)
    const {deleteEqMutation} =useMutateEq()
    const [toggle,setToggle] = useState(false)

    return (
    <List.Item>
      <div className='float-left mr-10'>
        <PencilAltIcon
            className='mx-1 h-5 w-5 cursor-pointer text-blue-500'
            onClick={() => {
                update({
                    id,
                    name,
                    category,
                    description,
                    quantity
                })

            }}
        />
        <TrashIcon
            className='h-5 w-5 cursor-pointer text-blue-500'
            onClick={() => {
                const res = confirm("削除してよろしいですか?")
                if (res == true){
                    deleteEqMutation.mutate(id)
                    alert("削除が完了しました。")
                }
                else {
                    alert("キャンセルされました。")
                }
            }}
        />
      </div>
      <span onClick={() => setToggle(!toggle)} className="cursor-pointer">
        <strong>{name}</strong> &emsp; 数量:{quantity}{description}
        <p>所在フロア:{category}</p>
        <p>
            登録日:{format(new Date(createdAt),"yyyy-MM-dd HH:mm:ss")}
            &emsp;     
            更新日:{format(new Date(updatedAt),"yyyy-MM-dd HH:mm:ss")}
        </p>
    </span>
    </List.Item>
  )
}
