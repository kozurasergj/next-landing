import styles from './burger.module.css'

interface BtnBurger {
  className?: string
  open: boolean
  setOpen: (isOpen: boolean) => void
}

export const BtnBurger = (props: BtnBurger) => {
  return (
    <button
      className={`${styles.hamburger} ${props.open && styles['is-active']} ${props.className}`}
      onClick={() => props.setOpen(!props.open)}
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </button>
  )
}
