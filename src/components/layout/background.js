import React from 'react'
import styles from './background.module.scss'

export default function Background({ children }) {
  return <div className={styles.background}>{children}</div>
}
