import create from 'zustand'
import { EditedEq } from '../types'

type State = {
  editedEq: EditedEq
  updateEditedEq: (payload: EditedEq) => void
  resetEditedEq: () => void
}

const useStore = create<State>((set) => ({
  editedEq: {
    id: 0,
    name: '',
    category: '',
    description: '',
    quantity: '',
    limitCount: '',
  },
  updateEditedEq: (payload) =>
    set({
      editedEq: {
        id: payload.id,
        name: payload.name,
        category: payload.category,
        description: payload.description,
        quantity: payload.quantity,
        limitCount: payload.limitCount,
      },
    }),
  resetEditedEq: () =>
    set({
      editedEq: {
        id: 0,
        name: '',
        category: '',
        description: '',
        quantity: '',
        limitCount: '',
      },
    }),
}))
export default useStore
