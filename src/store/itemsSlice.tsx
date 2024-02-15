import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { data } from "../data/data";
import { IData } from "../models/interface";

const storage: string | null = localStorage.getItem('todos') || null
const defaultState: IData[] = storage ? JSON.parse(storage) : data


const itemsSlice = createSlice({
    name: 'todo',
    initialState: defaultState,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            state.push({
                id: Date.now().toLocaleString(),
                title: action.payload,
                completed: false
            })
        },
        deleteTask(state, action: PayloadAction<string>) {
            return state.filter(elem => elem.id !== action.payload)
        },
        changeTask(state, action: PayloadAction<{ id: string; title: string }>) {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.title = action.payload.title;
            }
        },
        checkedTask(state, action: PayloadAction<string>) {
            state.map(elem => {
                if (elem.id === action.payload) elem.completed = !elem.completed
                return elem
            })
        }
    }
})

export default itemsSlice.reducer

export const {
    addTask,
    deleteTask,
    changeTask,
    checkedTask
} = itemsSlice.actions