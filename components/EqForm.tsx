import React,{FormEvent} from 'react'
import { TextInput,Button,Center, NumberInput } from '@mantine/core'
import { IconDatabase } from '@tabler/icons'
import useStore from '../store'
import { useMutateEq } from '../hooks/useMutateEqs'
import { ChangeEvent } from 'react'
import { OutPut } from './OutPut'

export const EqForm = () => {
    const {editedEq} = useStore()
    const update = useStore((state) => state.updateEditedEq)
    const {createEqMutation,updateEqMutation} = useMutateEq()
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (editedEq.id === 0){
            createEqMutation.mutate({
                name: editedEq.name,
                category: editedEq.category,
                description: editedEq.description,
                quantity: editedEq.quantity,
                limitCount: editedEq.limitCount
            })
        }
        else {
            updateEqMutation.mutate({
                id:editedEq.id,
                name: editedEq.name,
                category:editedEq.category,
                description:editedEq.description,
                quantity: editedEq.quantity,
                limitCount: editedEq.limitCount
            })
            alert("更新が完了しました。")
        }
    }
    
    return (
    <div className='col-span-1'>
      <form onSubmit={handleSubmit} className="mt-[10px]">
        <div className='bg-red-600 text-white text-center w-64'>xxx登録、更新フォームxxx</div>
        <TextInput
            className='w-64'
            label="*必須項目(名称)"
            size="md"
            mt="md"
            placeholder='名称'
            value={editedEq.name || ""}
            onChange={(e) => update({...editedEq,name:e.target.value})}
        />
        <TextInput
            className='w-64'
            label="*必須項目(所在フロア)"
            mt="md"
            placeholder='所在フロア'
            value={editedEq.category || ""}
            onChange={(e) => update({...editedEq,category: e.target.value})}

        />
        <TextInput
            label="*必須項目(数量)"
            value={editedEq.quantity || ""}
            placeholder="数量を入力"
            className='w-64'
            onChange={(e) => update({...editedEq,quantity: e.target.value})}
            
        />
        <TextInput
            label="アラート数量"
            value={editedEq.limitCount || ""}
            placeholder="アラート数量を入力"
            className='w-64'
            onChange={(e) => update({...editedEq,limitCount: e.target.value})}
            
        />
        <TextInput
            className='w-64'
            label="単位"        
            placeholder='単位を入力'
            value={editedEq.description || ""}
            onChange={(e) => update({...editedEq,description: e.target.value})}
        />
        <Button
            className='ml-24 mt-2'
            disabled={editedEq.name === "" || editedEq.category === "" || editedEq.quantity === ""  }
            leftIcon={<IconDatabase size={14}/>}
            color="cyan"
            type='submit'
        >
            {editedEq.id === 0 ? "作成" : "更新"}

        </Button>
        <OutPut/>
      
      </form>
    </div>
  )
}

