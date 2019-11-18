import React, { useState } from 'react'
import style from './concert.module.scss'
import ConcertDate from './ConcertInfo/ConcertDate/ConcertDate'
import ConcertContainer from './ConcertContainer/ConcertContainer'
import ConcertImage from './ConcertImage/ConcertImage'
import ConcertInfo from './ConcertInfo/ConcertInfo'

import Search from '../search/search'
import { func } from 'prop-types'
import Concerts from '../Concerts'

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
      ? thumbnail_url + '?mode=resize&width=600'
      : thumbnail_url

  return (
    <ConcertContainer
      concert={concert}
      setMouseOver={setMouseOver}
      mouseOver={mouseOver}
    >
      <ConcertImage
        thumbnail_url={thumbnail_url}
        mouseOver={mouseOver}
      ></ConcertImage>
      <ConcertInfo concert={concert}></ConcertInfo>
    </ConcertContainer>
    // <div
    //   className={thumbnail_url ? getStyleWithImage() : getStyleWithoutImage()}
    //   onMouseEnter={() => setMouseOver(true)}
    //   onMouseLeave={() => setMouseOver(false)}
    // >
    //   {thumbnail_url && (
    //     <img
    //       className={style.image}
    //       style={{
    //         backgroundImage: `url(${image})`,
    //       }}
    //     ></img>
    //   )}
    //   <a className={style.link} href={link_url} target="_blank" rel="noopener">
    //     <div className={style.info}>
    //       <div className={style.date}>
    //         <ConcertDate date={date}></ConcertDate>
    //       </div>
    //       <div className={style.title}>
    //         <h1>{title}</h1>
    //       </div>
    //     </div>
    //   </a>
    // </div>
  )
}
