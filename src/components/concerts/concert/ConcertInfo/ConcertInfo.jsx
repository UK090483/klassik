import React, { useContext } from 'react'
import InterfaceContext from '../../../../contexts/InterfaceContext'
import styles from './ConcertInfo.module.scss'
import ConcertDate from './ConcertDate/ConcertDate'
import ConcertTitle from './ConcertTitle/ConcertTitle'
export default function ConcertInfo({ concert }) {
  const { scrolled, isMobile } = useContext(InterfaceContext)

  function getStyle() {
    return isMobile ? `${styles.info} ${styles.mobile}` : styles.info
  }
  const { date, title } = concert.node
  return (
    <div className={styles.wrap}>
      <div className={getStyle()}>
        <div className={styles.date}>
          <ConcertDate date={date} isMobile={isMobile}></ConcertDate>
        </div>
        <div className={styles.title}>
          <ConcertTitle title={title} isMobile={isMobile}></ConcertTitle>
        </div>
      </div>
    </div>
  )
}
