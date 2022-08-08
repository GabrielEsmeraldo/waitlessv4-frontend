import styles from '../style/Content.module.css'
import { Home } from './Home'

export function Content() {
  return (
    <main className={styles.content}>
      <Home/>
    </main>
  )
}