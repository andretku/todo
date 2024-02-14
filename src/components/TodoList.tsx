import React, { useEffect, memo, useState } from 'react'
import { IData } from '../models/interface'
import TodoItem from './TodoItem'
import { useAppSelector } from '../hooks/useAppSelector'

const TodoList = (props: {todos: IData[]}) => {

    const {todos} = props

  return (
    <div>
        {todos.map((elem: IData) => <TodoItem
                                key={elem.id}
                                id={elem.id}
                                title={elem.title}
                                completed={elem.completed}
                            />)}
    </div>
  )
}

export default memo(TodoList)