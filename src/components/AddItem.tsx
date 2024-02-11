import React, { KeyboardEvent } from 'react'

const AddItem = (props: {addTodo: (title: string) => void}) => {

    const {addTodo} = props

    const handler = (event: KeyboardEvent): void => {
        const target = event.target as HTMLInputElement;
        if(event.key === "Enter") addTodo(target.value)
    }

  return (
    <div className="input_elem">
        <input
            type='text'
            onKeyDown={handler}
        />
    </div>
  )
}

export default AddItem