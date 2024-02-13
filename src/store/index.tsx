import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useState } from 'react';
import itemsSlice from './itemsSlice'

const rootReducer = combineReducers({
    items: itemsSlice,
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

