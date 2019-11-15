import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Auth from '../auth'
import AddData from '../../Data/DataContext'
import styles from './header.module.scss'
import '../../styles/global.scss'

const Header = ({ siteTitle }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  })

  const data = useStaticQuery(graphql`
    query {
      allImageSharp(
        filter: {
          original: {
            src: {
              eq: "/static/favicon+sorthvid-c44e4e61686dc8e260d75184d1e96e26.png"
            }
          }
        }
      ) {
        nodes {
          original {
            width
            height
            src
          }
        }
      }
    }
  `)
  const Logo = data.allImageSharp.nodes[0].original.src

  function listener() {
    if (scrollY > 150) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  function getStyles() {
    return scrolled ? `${styles.header} ${styles.scrolled}` : styles.header
  }

  return (
    <header className={getStyles()}>
      <div className={styles.logo}>
        <Link to="/">{siteTitle}</Link>
      </div>
      <div className={styles.menu}>
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
      {/* <AddData>
        <Auth></Auth>
      </AddData> */}
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
