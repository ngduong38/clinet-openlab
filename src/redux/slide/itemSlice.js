import { createSlice } from '@reduxjs/toolkit'

const ItemsSlice = createSlice({
  name: 'items',
  initialState: {
    ItemsArr: [],
  },
  reducers: {
    addItems: (state,action) => {
      const itemsIndex = state.ItemsArr.findIndex((p) => p.id === action.payload.id)

      if (itemsIndex === -1) {
        state.ItemsArr.push({...action.payload, quantity: 1})
      }else{
        state.ItemsArr[itemsIndex].quantity += 1;
      }
    },
    dropItems: (state,action) => {
      const itemsIndexRemove = action.payload.id
      const newItem = state.ItemsArr.filter((item) => item.id !== itemsIndexRemove )
      return {...state, ItemsArr: newItem}
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})


// Action creators are generated for each case reducer function
export const { addItems, dropItems } = ItemsSlice.actions

export default ItemsSlice.reducer