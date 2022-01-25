import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <img src="/images/logo.svg" alt="logo" />
      </div>
    </header>
  )
}