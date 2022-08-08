import styles from '../style/Sidebar.module.css'
import {Users, UserPlus, TrashSimple, BookOpen, FilePlus} from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h3>Navegação de chamada</h3>
      <li>
        <a href="#" ><Users size={18}/>Gerenciar chamada</a>
        <a href="#" ><UserPlus size={18}/>Inserir cliente</a>
        <a href="#" ><TrashSimple size={18}/>Limpar filas</a>
      </li>

      <h3>Navegação de agendamentos</h3>
      <li>
        <a href="#" ><BookOpen size={18}/>Gerenciar agendamento</a>
        <a href="#" ><FilePlus size={18}/>Inserir agendamento</a>
        <a href="#" ><TrashSimple size={18}/>Limpar agendamentos</a>
      </li>
    </aside>
  )
}