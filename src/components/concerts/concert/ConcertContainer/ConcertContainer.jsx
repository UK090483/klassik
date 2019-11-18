import React, { useContext, useState } from 'react'
import InterfaceContext from '../../../../contexts/InterfaceContext'
import styles from './ConcertContainer.module.scss'

export default function ConcertContainer({
  concert,
  setMouseOver,
  mouseOver,
  children,
}) {
  const { thumbnail_url, link_url } = concert.node
  const { scrolled, isMobile } = useContext(InterfaceContext)

  function getStyle() {
    return thumbnail_url
      ? `${styles.wrap} `
      : `${styles.wrap}  ${styles.noimage}`
  }

  return (
    <div
      className={getStyle()}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <a
        className={styles.link}
        href={link_url}
        target="_blank"
        rel="noopener"
      ></a>
      {children}
    </div>
  )
}
