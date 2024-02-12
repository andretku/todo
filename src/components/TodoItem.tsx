import React, { useContext } from 'react'
import { Button, H3 } from '../assets/styles/app.styles'
import { IData } from '../models/interface'
import { WrapperBtn } from './Todo.styled'
import { Wrapper, WrapperCheckbox } from './Todo.styled'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';


const TodoItem = (props: IData) => {

    const { completed, id, title } = props
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <Wrapper>
            <WrapperCheckbox>
                <Checkbox
                    checked={completed}
                    // onChange={() => handleDispatch(id)}
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
                <Button>Delete</Button>
            </WrapperBtn>
        </Wrapper>
    )
}

export default TodoItem