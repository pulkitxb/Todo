import styles from "./App.module.css"
import Add from "./components/Add"
import TodoList from "./components/TodoList"
function App() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Add />
        <TodoList />
      </div>
    </main>
  )
}

export default App
