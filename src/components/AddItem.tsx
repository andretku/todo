import React, { useState, ChangeEvent } from 'react'
import { AddItemField, Button } from '../assets/styles/app.styles';
import { addNewItem } from "../store/itemsSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { TextField } from "@mui/material";
import { AddTextField } from './Todo.styled';

const AddItem = () => {

    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const handler = (value: string) => {
        if (value.length >= 3) {
            dispatch(addNewItem(value))
            setError(false)
            setValue('')
        }
        else setError(true)
    }

    const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <AddItemField>
                <AddTextField
                    placeholder='add new task'
                    fullWidth
                    size='small'
                    value={value}
                    onChange={handlerChange}
                />
                <Button onClick={() => handler(value)}>Add</Button>
            </AddItemField>
            {error && <p style={{ color: 'red' }}>Enter the text</p>}
        </div>
    )
}

export default AddItem