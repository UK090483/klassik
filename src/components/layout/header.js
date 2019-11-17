import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'

import InterfaceContext from '../../contexts/InterfaceContext'

import './menu.css'

import styles from './header.module.scss'
import '../../styles/global.scss'
import ColorCode from './ColorCode'

const Header = ({ siteTitle }) => {
  const { scrolled, isMobile } = useContext(InterfaceContext)

  function getStyles() {
    return scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
  }

  return (
    <header className={getStyles()}>
      {/* <ColorCode></ColorCode> */}
      <div className={styles.logo}>
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className={styles.menu}>
        <div className={styles.logoSide}>
          <Link to="/">{siteTitle}</Link>
        </div>
        {!(scrolled && isMobile) && (
          <div className={styles.links}>
            <Link to="/" className={styles.menuItem}>
              Concerts
            </Link>
            <Link to="/venues" className={styles.menuItem}>
              Venues
            </Link>
            <Link to="/festivals" className={styles.menuItem}>
              Festivals
            </Link>
          </div>
        )}
        <div className={styles.logoSide}></div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
