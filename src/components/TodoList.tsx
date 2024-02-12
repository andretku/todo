import React, { useEffect } from 'react'
import { IData } from '../models/interface'
import TodoItem from './TodoItem'
import { data } from '../data/data'
import { useAppDispatch } from '../hooks/useAppDispatch'
import { useAppSelector } from '../hooks/useAppSelector'
import { itemsList } from '../store/itemsSlice'

const TodoList = () => {

    const dispatch = useAppDispatch()
    const items = useAppSelector(store => store.items)

    useEffect(() => {
        dispatch(itemsList())
    }, [items])

    console.log(items)

  return (
    <div>
        {/* {items.map((elem: IData) => <TodoItem
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}

                            />)} */}

    </div>
  )
}

export default TodoList