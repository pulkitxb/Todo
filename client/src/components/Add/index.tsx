import { useState } from "react"
import styles from "./index.module.css"
import { gql, useMutation } from "@apollo/client"

const ADD_TODO = gql`
    mutation Mutation($todo: String) {
    addTodo(todo: $todo) {
        code
        message
        success
        todo {
        id
        title
        }
    }
}
`

function Add() {
    const [input, setInput] = useState('');
    const [addTodo] = useMutation(ADD_TODO, { variables: { todo: input }, onCompleted: (data) => { console.log(data); setInput(''); } },);

    function addTodoHandler() {
        if (!input) {
            alert("Type a todo first")
            return;
        }

        addTodo();
        alert("Todo Added 🎉");
    }
    return (
        <div>
            <input placeholder="Enter your todo" className={styles.type} value={input} onChange={(e) => setInput(e.target.value)} />
            <button className={styles.addBtn} onClick={addTodoHandler}>+</button>
        </div>
    )
}

export default Add