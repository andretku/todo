import { memo, useState, ChangeEvent, useEffect, useCallback } from 'react'
import { Button, H3 } from '../assets/styles/app.styles'
import { IData } from '../models/interface'
import { AddTextField, WrapperBtn } from './Todo.styled'
import { Wrapper, WrapperCheckbox } from './Todo.styled'
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import { useAppDispatch } from '../hooks/useAppDispatch'
import { changeTask, checkedTask, deleteTask } from '../store/itemsSlice'
import PropTypes from 'prop-types';


const TodoItem = (props: IData) => {

    const { completed, id, title } = props
    const dispatch = useAppDispatch()

    const [edit, setEdit] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [todoTitle, setTodoTitle] = useState<string>(title);
    const [cancel, setCancel] = useState<string>('')

    const handleChangeTitle = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTodoTitle(e.target.value);
        if (e.target.value.trim().length < 3) setError(true)
    }, []);

    useEffect(() => {
        if (error && todoTitle.trim().length >= 3) setError(false)
    }, [todoTitle, error])

    const deleteTodo = useCallback((id: string) => {
        dispatch(deleteTask(id));
    }, [dispatch]);

    const editTitle = useCallback(() => {
        setCancel(todoTitle)
        setEdit(prev => !prev);
    },[todoTitle]);

    const cancelEdit = useCallback(() => {
        setTodoTitle(cancel)    // если Cancel, то возвращ предыд title
        setEdit(prev => !prev);
    }, [cancel]);

    const updateTodoTitle = useCallback((id: string, title: string) => {
        dispatch(changeTask({ id, title }));
        setEdit(prev => !prev);
    }, [dispatch]);


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
                    <Button
                        onClick={() => updateTodoTitle(id, todoTitle)}
                        disabled={error}
                    >Save</Button>
                </WrapperBtn>
            ) : (
                <WrapperBtn>
                    <Button onClick={editTitle}>Edit</Button>
                    <Button onClick={() => deleteTodo(id)}>Delete</Button>
                </WrapperBtn>
            )}

        </Wrapper>
    )
}

TodoItem.propTypes = {
    completed: PropTypes.bool,
    id: PropTypes.string,
    title: PropTypes.string
}

export default memo(TodoItem)