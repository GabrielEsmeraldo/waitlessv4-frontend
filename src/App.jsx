import { Content } from './components/Content'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import styles from './style/App.module.css'

function App() {

  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.dashboardGroup}>
        <Sidebar />
        <Content />
      </div>
    </div>
  )
}

export default App
