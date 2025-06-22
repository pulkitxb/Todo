import { ImBin } from "react-icons/im";
import styles from "./index.module.css"

interface Title {
  title: String
}

function TodoItem({ title }: Title) {
  return (
    <div className={styles.item}>
      <span className={styles.title}>{title}</span>
      <ImBin className={styles.deleteBtn} />
    </div>
  )
}

export default TodoItem