import React from 'react'
import styles from './ConcertTitle.module.scss'

export default function ConcertTitle({ title, isMobile }) {
  function getStyle() {
    return isMobile ? `${styles.wrap} ${styles.mobile}` : styles.wrap
  }
  return (
    <div className={getStyle()}>
      <h1>{title}</h1>
    </div>
  )
}
