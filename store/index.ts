import create from 'zustand'
import { EditedEq } from '../types'

type State = {
  editedEq: EditedEq
  updateEditedEq: (payload: EditedEq) => void
  resetEditedEq: () => void
}

const useStore = create<State>((set) => ({
  editedEq: { id: 0, name: '', category: '', description: '', quantity: '' },
  updateEditedEq: (payload) =>
    set({
      editedEq: {
        id: payload.id,
        name: payload.name,
        category: payload.category,
        description: payload.description,
        quantity: payload.quantity,
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
      },
    }),
}))
export default useStore
