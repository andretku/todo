import React, { useContext } from 'react'
import { Button } from '../assets/styles/app.styles'
import { IData } from '../models/interface'


const TodoItem = (props: IData) => {

    const {completed, id, title} = props


  return (
    <div
        // style={{backgroundColor: (completed) ? 'green' : 'red'}}
    >
        <h2>{title}</h2>
        <Button>Edit</Button>
        <Button>Delete</Button>
    </div>
  )
}

export default TodoItem