import TodoItem from "../TodoItem"
import styles from "./index.module.css"

const mockTask = [
    {
        id: 1,
        title: "Task 1"
    },
    {
        id: 2,
        title: "Task 2"
    },
    {
        id: 3,
        title: "Task 3"
    }
]

function Todo() {
    return (
        <div className={styles.todoContainer}>
            <h1 className={styles.heading}>TODO</h1>
            <hr className={styles.line} />
            {mockTask.map((({ id, title }) => (
                <TodoItem key={id} title={title} />
            )))}
        </div>
    )
}

export default Todo