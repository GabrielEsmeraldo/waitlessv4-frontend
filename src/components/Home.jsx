import styles from '../style/Home.module.css'

export function Home() {
  return (
    <div className={styles.home}>
      <h1>Seja bem-vindo ao <span>Cartório Pariz</span></h1>
      <div className={styles.titleBorder}></div>

      <h3 className={styles.title}>Informações</h3>
      <div className={styles.cardSection}>

        <div className={`${styles.card} ${styles.onHoldCustomers}`}>
          <strong>Clientes em espera</strong>
          <span>12</span>
        </div>

        <div className={`${styles.card} ${styles.preferedCustomers}`}>
          <strong>Clientes prioridade</strong>
          <span>04</span>
        </div>

        <div className={`${styles.card} ${styles.todayCustomers}`}>
          <strong>Clientes de hoje</strong>
          <span>26</span>
        </div>

        <div className={`${styles.card} ${styles.totalCustomers}`}>
          <strong>Total geral de clientes</strong>
          <span>12.350</span>
        </div>

      </div>

      <h3 className={styles.title}>Últimas senhas lançadas por <span>ordem de chegada</span></h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nº da senha</th>
            <th>Cliente</th>
            <th>Fila</th>
            <th>Tipo de senha</th>
            <th>Horário de chegada</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>GC01</td>
            <td>CICERO MOTTA</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.normal}>NORMAL</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
          <tr>
            <td>GC02</td>
            <td>FELIPE BRAGA</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.priority}>PRIORIDADE</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
          <tr>
            <td>GC03</td>
            <td>DARLAN OLIVEIRA</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.normal}>NORMAL</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
          <tr>
            <td>GC04</td>
            <td>GABRIEL ESMERALDO</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.verySerious}>GRAVÍSSIMO</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
          <tr>
            <td>GC05</td>
            <td>CICERO MOTTA</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.normal}>NORMAL</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
          <tr>
            <td>GC06</td>
            <td>FELIPE BRAGA</td>
            <td>DOUTORA ANDREZA NOBRE</td>
            <td className={styles.priority}>PRIORIDADE</td>
            <td>08/08/2022 às 08:00h</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}