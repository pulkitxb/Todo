import styles from "./index.module.css"

function Search() {
    return (
        <div>
            <input placeholder="Enter your todo" className={styles.type} />
            <button className={styles.addBtn}>+</button>
        </div>
    )
}

export default Search