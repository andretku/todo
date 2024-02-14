import { memo, useState, ChangeEvent, useEffect } from 'react'
import { Button, H3 } from '../assets/styles/app.styles'
import { IData } from '../models/interface'
import { AddTextField, WrapperBtn } from './Todo.styled'
import { Wrapper, WrapperCheckbox } from './Todo.styled'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { useAppDispatch } from '../hooks/useAppDispatch'
import { checkedTask, deleteTask } from '../store/itemsSlice'



const TodoItem = (props: IData) => {

    const { completed, id, title } = props
    const dispatch = useAppDispatch()

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [todoTitle, setTodoTitle] = useState(title);
    const [cancel, setCancel] = useState('')


    const editTitle = () => {
        if (edit) {
            setTodoTitle(cancel)    // если Cancel, то возвращ предыд title
            setEdit(prev => !prev);
        } else {
            setCancel(todoTitle)
            setEdit(prev => !prev);
        }
    };

    const handleChangeTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTodoTitle(e.target.value);
        if (e.target.value.trim().length < 3) setError(true)
    };

    useEffect(() => {
        if (error && todoTitle.trim().length >= 3) setError(false)
    }, [todoTitle])

    const delConfirmTitle = () => {
        if (edit) {
            !error && setEdit(prev => !prev)
        } else {
            dispatch(deleteTask(id))
        }
    }


// ! - переделать эти функции под себя

    const deleteTodo = (id: string) => {
        dispatch(removeTodo(id));
    };

    const editTitle = () => {
        setEdit(true);
        setError(false);
    };

    const cancelEdit = () => {
        setEdit(false);
        setError(false);
        setTodoTitle(title);
    };

    const updateTodoTitle = (id: string, title: string) => {
        const update = { id, title };

        if (title.length > 0) {
            dispatch(changeTitle(update));
            setEdit(false);
            setError(false);
        }

        setError(true);
    };





    return (
        <Wrapper>

            {edit ?
                (<AddTextField
                    id='outlined-basic'
                    variant='outlined'
                    size='small'
                    color='secondary'
                    focused
                    value={todoTitle}
                    onChange={handleChangeTitle}
                    // error={error}
                    helperText={error && 'this field can not be empty'}
                />
                ) : (
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
                        <H3>{todoTitle}</H3>
                    </WrapperCheckbox>
                )}
            {edit ? (
                <WrapperBtn>
                    <Button onClick={cancelEdit}>Cancel</Button>
                    <Button onClick={() => updateTodoTitle(id, todoTitle)}>Save</Button>
                </WrapperBtn>
            ) : (
                <WrapperBtn>
                    <Button onClick={editTitle}>Edit</Button>
                    <Button onClick={() => deleteTodo(id)}>Delete</Button>
                </WrapperBtn>
            )}

            {/* <WrapperBtn>
                <Button onClick={editTitle}>
                    {edit ? 'Cancel' : 'Edit'}</Button>
                <Button onClick={delConfirmTitle}>
                    {edit ? 'Save' : 'Delete'}</Button>
            </WrapperBtn> */}


        </Wrapper>
    )
}

export default memo(TodoItem)