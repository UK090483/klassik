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

  function getStyleWithImage() {
    return mouseOver ? `${styles.wrap} ${styles.mouseOver}` : styles.wrap
  }
  function getStyleWithoutImage() {
    return mouseOver
      ? `${styles.wrap} ${styles.mouseOver} ${styles.noimage}`
      : `${styles.wrap}  ${styles.noimage}`
  }
  function getStyleMobileNoImage() {
    return thumbnail_url
      ? `${styles.wrap} ${styles.mobile}`
      : `${styles.wrap}  ${styles.mobile}  ${styles.noimage}`
  }

  return isMobile ? (
    <a href={link_url} target="_blank" rel="noopener">
      <div className={getStyleMobileNoImage()}>{children}</div>
    </a>
  ) : (
    <div
      className={thumbnail_url ? getStyleWithImage() : getStyleWithoutImage()}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      {children}
    </div>
  )
}
