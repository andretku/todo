import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "./data/data";
import { Container, H1, H2, Main, Button } from "./assets/styles/app.styles";
import { activeTasks, addTask, completedTasks } from "./store/itemsSlice";
import { Input } from "@mui/base";
import { IData } from "./models/interface";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { useAppSelector } from "./hooks/useAppSelector";
import { WrapperBtn } from "./components/Todo.styled";
import { Context } from "./context";




function App() {


    const dispatch = useAppDispatch()
    const items: IData[] = useAppSelector(store => store.items)

    const [todos, setTodos] = useState(data)
    const [filtered, setFiltered] = useState(items)

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(items))
    // }, [items])

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

    const tasksToggle = (str: string) => {
        str === 'active' && setFiltered(items.filter(elem => elem.completed === false))
        str === 'completed' && setFiltered(items.filter(elem => elem.completed === true))
        str === 'all' && setFiltered(items)
    }



    return (
        <Main>

            <Container>
                <H1>Todont</H1>
                <AddItem />

                <WrapperBtn>
                    <Button $header onClick={() => (tasksToggle('all'))}>All tasks</Button>
                    <Button $header onClick={() => (tasksToggle('active'))}>Active tasks</Button>
                    <Button $header onClick={() => (tasksToggle('completed'))}>Completed tasks</Button>
                </WrapperBtn>

                <H2>{filtered.length} tasks remaining</H2>

                <TodoList filtered={filtered} />
            </Container>

        </Main>
    );
}

export default App;