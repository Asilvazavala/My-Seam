import styles from './Slider.module.css';

export const SliderItem = ({ firstTeam='Suiza', firstResult=1, secondTeam='España', secondResult=2, current='FINALIZADO' }) => {
  return (
    <main>
      <article className={styles.card}>
        <header className={styles.firstTeam}>
          <span>{firstTeam}</span>
          <span>{firstResult}</span>
        </header>

        <footer className={styles.secondTeam}>
          <span>{secondTeam}</span>
          <span>{secondResult}</span>
        </footer>

        <aside className={styles.finalized}>
          <i className={current === 'EN JUEGO' ? `${styles.inGame} bx bxs-circle` : 'bx bxs-circle'}></i>
          <span>{current}</span>
        </aside>
      </article>
    </main>
  )
}
