import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const storage: string = localStorage.getItem('todos') || ''
const defaultState: string = JSON.parse(storage) ?? data

const itemsSlice = createSlice({
    name: 'Products',
    initialState: defaultState,
    reducers: {
        addNewItem(state, action) {
            return action.payload
        },


    }
})

export default itemsSlice.reducer

export const {
    addNewItem,

} = itemsSlice.actions