import { useState, ChangeEvent, useEffect, memo, useCallback } from 'react'
import { AddItemField, Button } from '../assets/styles/app.styles';
import { addTask } from "../store/itemsSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { AddTextField } from './Todo.styled';

const AddItem = () => {

    const dispatch = useAppDispatch()
    const [value, setValue] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const handler = useCallback((value: string) => {
        if (value.trim().length >= 3) {
            dispatch(addTask(value))
            setValue('')
        }
        else setError(true)
    }, [dispatch])

    useEffect(() => {
        if (error && value.trim().length >= 3) setError(false)
    }, [value, error])

    const handlerChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }, [])

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
            {error && <span style={{ color: 'red' }}>Please, enter the text!</span>}
        </div>
    )
}

export default memo(AddItem)