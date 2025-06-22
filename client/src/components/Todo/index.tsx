import TodoItem from "../TodoItem"
import styles from "./index.module.css"
import { gql, useQuery } from "@apollo/client"
import type { Todo, Query } from "../../__generated__/types"

const TODOS = gql`
    query GetTodos {
        getTodos {
            id
            title
        }
    }
`

function Todo() {
    const { data, error, loading } = useQuery<Query>(TODOS);

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{`Error ${error.message}`}</h1>
    }
    const todos = data?.getTodos ?? [];

    return (
        <div className={styles.todoContainer}>
            <h1 className={styles.heading}>TODO</h1>
            <hr className={styles.line} />
            {todos.length > 0 ? (
                todos.map((todo: Todo) => (
                    <TodoItem key={todo.id} title={todo.title} />
                ))
            ) : (
                <p className={styles.emptyState}>No todos available</p>
            )}
        </div>
    )
}

export default Todo