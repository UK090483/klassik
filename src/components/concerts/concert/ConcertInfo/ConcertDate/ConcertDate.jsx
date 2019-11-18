import React from 'react'
import styles from './concertDate.module.scss'
import moment from 'moment'

export default function ConcertDate({ date, isMobile }) {
  if (date) {
    function getStyle() {
      return isMobile ? `${styles.wrap} ${styles.mobile}` : styles.wrap
    }
    var event = new Date(date)

    let pM = event.toLocaleDateString('de-DE', {
      year: '2-digit',
      month: '2-digit',
      day: 'numeric',
    })

    let T = event.toLocaleDateString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
    })

    T = 'Kl: ' + T.split(',')[1]

    return (
      <div className={getStyle()}>
        <h1>{pM}</h1>
        <h1>{T}</h1>
      </div>
    )
    return 'noDate'
  }
}
