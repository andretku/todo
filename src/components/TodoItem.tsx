import React, { useContext } from 'react'
import { IData } from '../models/interface'


const TodoItem = (props: IData) => {

    const {completed, id, title} = props


  return (
    <div
        className='container'
        style={{backgroundColor: (completed) ? 'green' : 'red'}}


    >
        <h2>{title}</h2>
    </div>
  )
}

export default TodoItem