import logo from '../assets/waitless-logo.svg'
import styles from '../style/Header.module.css'
import { SignOut } from 'phosphor-react'
import avatar from '../assets/avatar.svg'

export function Header() {

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo waitless" />

      <div className={styles.user}>
        <img src={avatar} alt="" />
        <span className={styles.username}>Cicero Motta</span>

        <button className={styles.signOutBtn}>
          <a href="">Sair</a>
          <SignOut size={23} />
        </button>
      </div>
    </header>
  )
}
