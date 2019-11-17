import React, { useState } from 'react'
import style from './concert.module.scss'
import ConcertDate from './ConcertDate/ConcertDate'

import Search from '../search/search'
import { func } from 'prop-types'

export default function Concert({ concert }) {
  const {
    subTitle,
    title,
    thumbnail_url,
    venue,
    date,
    link_url,
    featuredImg,
  } = concert.node

  const [mouseOver, setMouseOver] = useState(false)

  const image =
    thumbnail_url && thumbnail_url.includes('musikhusetaarhus.dk')
      ? thumbnail_url + '?mode=crop&width=600&height=400'
      : thumbnail_url
  console.log(image)

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
        <img
          className={style.image}
          style={{
            backgroundImage: `url(${image})`,
          }}
        ></img>
      )}
      <a className={style.link} href={link_url} target="_blank" rel="noopener">
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
