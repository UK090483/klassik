import React from 'react'
import style from './concertDate.module.scss'
import moment from 'moment'

export default function ConcertDate({ date }) {
  if (date) {
    // let pM = moment(date).format('D MMM YY')
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
      <div className={style.wrap}>
        <h1>{pM}</h1>
        <h1>{T}</h1>
      </div>
    )
    return 'noDate'
  }
}
