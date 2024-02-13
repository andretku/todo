import React, { useContext, memo } from 'react'
import { Button, H3 } from '../assets/styles/app.styles'
import { IData } from '../models/interface'
import { WrapperBtn } from './Todo.styled'
import { Wrapper, WrapperCheckbox } from './Todo.styled'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { useAppDispatch } from '../hooks/useAppDispatch'
import { checkedTask, deleteTask } from '../store/itemsSlice'
import { Context } from '../context'


const TodoItem = (props: IData) => {

    const { completed, id, title } = props
    const dispatch = useAppDispatch()


    return (
        <Wrapper>
            <WrapperCheckbox>
                <Checkbox
                    checked={completed}
                    onChange={() => dispatch(checkedTask(id))}
                    size='medium'
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                />
                <H3>{title}</H3>
            </WrapperCheckbox>

            <WrapperBtn>
                <Button>Edit</Button>
                <Button onClick={() => dispatch(deleteTask(id))}>Delete</Button>
            </WrapperBtn>
        </Wrapper>
    )
}

export default memo(TodoItem)