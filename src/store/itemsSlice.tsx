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
        itemsList(state) {          // * не использ
            return state
        },
        activeTasks(state, action: PayloadAction<boolean>) {
            state.find(elem => elem.completed === action.payload)

        },
        completedTasks(state) {
            return state.filter(elem => elem.completed === true)
        },
        deleteTask(state, action: PayloadAction<string>) {
            return state.filter(elem => elem.id !== action.payload)
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
    itemsList,
    activeTasks,
    completedTasks,
    deleteTask,
    checkedTask,

} = itemsSlice.actions