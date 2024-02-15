import { useEffect, useState } from "react";
import { Container, H1, H2, Main, Button } from "./assets/styles/app.styles";
import { IData } from "./models/interface";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import { useAppSelector } from "./hooks/useAppSelector";
import { WrapperBtn } from "./components/Todo.styled";

function App() {

    const items: IData[] = useAppSelector(store => store.items)

    const [todos, setTodos] = useState<IData[]>([])
    const [all, setAll] = useState(true)
    const [active, setActive] = useState(false)
    const [complete, setComplete] = useState(false)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(items))
    }, [items])

    useEffect(() => {
        if (all) setTodos(items)
        else if (active) setTodos(items.filter(elem => elem.completed === false))
        else setTodos(items.filter(elem => elem.completed === true))
    }, [items, all, active, complete])


    return (
        <Main>
            <Container>
                <H1>Todont</H1>
                <AddItem />

                <WrapperBtn>
                    <Button $header onClick={() => {
                        setAll(true)
                        setActive(false)
                        setComplete(false)
                    }}
                        style={{ backgroundColor: all ? '#bd93f9' : 'transparent' }}
                    >All tasks</Button>
                    <Button $header onClick={() => {
                        setAll(false)
                        setActive(true)
                        setComplete(false)
                    }}
                        style={{ backgroundColor: active ? '#bd93f9' : 'transparent' }}
                    >Active tasks</Button>
                    <Button $header
                        onClick={() => {
                            setAll(false)
                            setActive(false)
                            setComplete(true)
                        }}
                        style={{ backgroundColor: complete ? '#bd93f9' : 'transparent' }}
                    >Completed tasks</Button>
                </WrapperBtn>

                <H2>{todos.length} tasks remained</H2>

                <TodoList todos={todos} />

            </Container>

        </Main>
    );
}

export default App;