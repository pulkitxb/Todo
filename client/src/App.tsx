import styles from "./App.module.css"
import Search from "./components/Search"
import Todo from "./components/Todo"
function App() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Search />
        <Todo />
      </div>
    </main>
  )
}

export default App
