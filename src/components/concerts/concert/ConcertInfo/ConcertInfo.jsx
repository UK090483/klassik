import React, { useContext } from 'react'
import InterfaceContext from '../../../../contexts/InterfaceContext'
import styles from './ConcertInfo.module.scss'
import ConcertDate from './ConcertDate/ConcertDate'
import ConcertTitle from './ConcertTitle/ConcertTitle'
export default function ConcertInfo({ concert, mouseOver }) {
  const { scrolled, isMobile } = useContext(InterfaceContext)

  function getStyleWrap() {
    return mouseOver ? `${styles.wrap} ${styles.mouseOver}` : styles.wrap
  }
  function getStyle() {
    return isMobile ? `${styles.info} ${styles.mobile}` : styles.info
  }
  const { date, title } = concert.node
  return (
    <div className={getStyleWrap()}>
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
