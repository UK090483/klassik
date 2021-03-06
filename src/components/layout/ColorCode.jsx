import React from 'react'
import styles from './colorCode.module.scss'

export default function ColorCode() {
  return (
    <div className={styles.wrap}>
      <div className={styles.device}></div>
      <div className={styles.media}></div>
      <div className={styles.black}></div>
      <div className={styles.gold}></div>
      <div className={styles.white}></div>
      <div className={styles.lilla}></div>
    </div>
  )
}
