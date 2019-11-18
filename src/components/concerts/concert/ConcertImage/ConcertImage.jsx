import React, { useContext } from 'react'
import InterfaceContext from '../../../../contexts/InterfaceContext'
import styles from './ConcertImage.module.scss'
export default function ConcertImage({ thumbnail_url, mouseOver }) {
  const { scrolled, isMobile } = useContext(InterfaceContext)

  function getStyle() {
    return mouseOver ? `${styles.wrap} ${styles.mouseOver}` : styles.wrap
  }
  const image =
    thumbnail_url && thumbnail_url.includes('musikhusetaarhus.dk')
      ? thumbnail_url + '?mode=resize&width=600'
      : thumbnail_url
  return (
    <div className={getStyle()}>
      <div className={styles.overlay}></div>
      <img className={styles.image} src={image}></img>
    </div>
  )
}
