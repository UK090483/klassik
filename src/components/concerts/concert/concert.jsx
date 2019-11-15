import React, { useState } from 'react'
import style from './concert.module.scss'
import ConcertDate from './ConcertDate/ConcertDate'
import Search from '../search/search'
import { func } from 'prop-types'

export default function Concert({ concert }) {
  const { subTitle, title, thumbnail_url, venue, date, link_url } = concert.node
  const [mouseOver, setMouseOver] = useState(false)

  function getStyleWithImage() {
    return mouseOver ? `${style.wrap} ${style.mouseOver}` : style.wrap
  }
  function getStyleWithoutImage() {
    return mouseOver
      ? `${style.wrap} ${style.mouseOver} ${style.noimage}`
      : `${style.wrap}  ${style.noimage}`
  }
  return (
    <div
      className={thumbnail_url ? getStyleWithImage() : getStyleWithoutImage()}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {thumbnail_url && (
        <div
          className={style.image}
          style={{
            backgroundImage: `url(${thumbnail_url})`,
          }}
        ></div>
      )}
      <a className={style.link} href={link_url} target="_blank">
        <div className={style.info}>
          <div className={style.date}>
            <ConcertDate date={date}></ConcertDate>
          </div>
          <div className={style.title}>
            <h1>{title}</h1>
          </div>
        </div>
      </a>
    </div>
  )
}