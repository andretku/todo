import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./data/data";
import { Container, H1, H2, Main } from "./assets/styles/app.styles";
import { Button } from "@mui/material";
import { addNewItem } from "./store/itemsSlice";
import { Input } from "@mui/base";
import { IData } from "./models/interface";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";


function App() {


    const dispatch = useAppDispatch()
    const items = useAppSelector(store => store.items)

    const [todos, setTodos] = useState(data)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items))
    }, [items])

    useEffect(() => {
        setTodos(items)
    }, [items])


    const deleteTodo = (id: string) => {
        let filtered_todos = todos.filter((elem: IData) => elem.id !== id)
        setTodos(filtered_todos)
    }

    const changeTodo = (id: string) => {
        let changed_todos = todos.map((elem: IData) => {
            if (elem.id === id) elem.completed = !elem.completed
            return elem
        })
        setTodos(changed_todos)
    }

    const addTodo = (title: string) => {
        let todo: IData = {
            id: Date.now() + title,
            title: title,
            completed: false
        }
        setTodos(prev => [...prev, todo])
    }


    return (
        <Main>
            <Container>
                <H1>Todont</H1>
                <AddItem />


                <H2>{todos.length} tasks remaining</H2>
                <TodoList />
            </Container>
        </Main>
    );
}

export default App;
