import React, { useEffect, memo, useState } from 'react'
import { IData } from '../models/interface'
import TodoItem from './TodoItem'
import { data } from '../data/data'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { itemsList } from '../store/itemsSlice'

const TodoList = (props: {filtered: IData[]}) => {

    const {filtered} = props
    const items = useAppSelector(store => store.items)


    // const filter = (str: string) => {
    //     if(str = 'all') {
    //         return items
    //     }
    //     if(str = 'active') {
    //         let filtered_todos = items.filter(elem => elem.completed === false)
    //         setFiltered(filtered_todos)
    //     }
    //     if(str = 'completed') {
    //         return items.filter(elem => elem.completed === true)
    //     }
    // }







  return (
    <div>
        {filtered.map((elem: IData) => <TodoItem
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                            />)}
    </div>
  )
}

export default memo(TodoList)