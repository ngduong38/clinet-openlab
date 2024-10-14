import {configureStore} from '@reduxjs/toolkit'
import ItemsSlice from "./slide/itemSlice"

const store = configureStore({
    reducer:{
        itemsSlice: ItemsSlice
    }
})
export default store;