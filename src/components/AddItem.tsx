import React, { useState, ChangeEvent } from 'react'
import { Button } from '../assets/styles/app.styles';
import { addNewItem } from "../store/itemsSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { TextField } from "@mui/material";

const AddItem = () => {

    const dispatch = useAppDispatch()
    const [value, setValue] = useState('')

    const handler = (value: string) => {
        dispatch(addNewItem(value))
        setValue('')
    }

    const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <TextField
                placeholder='add new task'
                fullWidth
                focused
                color='secondary'
                sx={{
                    '& .MuiOutlinedInput-input': {
                        color: '#FFF',
                    },
                }}
                size='small'
                value={value}
                onChange={handlerChange}
            />
            <Button onClick={() => handler(value)}>ADD</Button>
        </div>
    )
}

export default AddItem