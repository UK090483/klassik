import React from 'react'
import styles from './Colorcode.module.scss'

export default function ColorCode() {
  return (
    <div className={styles.wrap}>
      <div className={styles.black}></div>
      <div className={styles.gold}></div>
      <div className={styles.white}></div>
      <div className={styles.lilla}></div>
    </div>
  )
}
