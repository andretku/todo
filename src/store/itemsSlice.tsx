import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useState } from "react";
import { data } from "../data/data";
import { IData } from "../models/interface";

// const storage: string = localStorage.getItem('todos') || ''
// const defaultState: string = JSON.parse(storage) ?? data


const itemsSlice = createSlice({
    name: 'todo',
    initialState: data,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            state.push({
                id: Date.now().toLocaleString(),
                title: action.payload,
                completed: false
            })
        },
        deleteTask(state, action: PayloadAction<string>) {
            state.splice(+action.payload, 1)
        },
        checkedTask(state, action: PayloadAction<string>) {
            state.map(elem => {
                if(elem.id === action.payload) elem.completed = !elem.completed
                return elem
            })
        }

    }
})

export default itemsSlice.reducer

export const {
    addTask,
    deleteTask,
    checkedTask,

} = itemsSlice.actions