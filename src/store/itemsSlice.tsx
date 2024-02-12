import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { IData } from "../models/interface";

// const storage: string = localStorage.getItem('todos') || ''
// const defaultState: string = JSON.parse(storage) ?? data

const itemsSlice = createSlice({
    name: 'todo',
    initialState: data,
    reducers: {
        addNewItem(state, action: PayloadAction<string>) {
            const newItem: IData = {
                id: Date.now() + action.payload,
                title: action.payload,
                completed: false
            }
            return {...state, newItem}
        },
        itemsList(state) {
            return state
        }

    }
})

export default itemsSlice.reducer

export const {
    addNewItem,
    itemsList,

} = itemsSlice.actions