import styles from './App.module.css'
import { ListAddingItems, ListGeneration } from './ui/feature_testing'

export default function App() {
  return (
    <div>
      <h1>fTree mini framework</h1>
      <div className={styles['app-container']}>
        <section className={styles.tile}>
          <br />
          <img src="https://placecats.com/300/200" alt="cat" />
          <br />
          <button onclick={() => alert('Hello, There!')}>Click Me!</button>
        </section>

        <section className={styles.tile}>
          <ListGeneration />
        </section>

        <section className={styles.tile}>
          <ListAddingItems />
        </section>
      </div>
    </div>
  )
}
