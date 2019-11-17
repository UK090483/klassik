/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import Header from './header'

import styles from './layout.module.scss'
import { style } from '@material-ui/system'
import Background from './background'
import { InterfaceContextWrap } from '../../contexts/InterfaceContext'
import SEO from '../seo'
import ColorCode from './ColorCode'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <InterfaceContextWrap>
      <SEO></SEO>
      <div className={'page-wrap'}>
        <Background>
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className={styles.container}>
            <main>{children}</main>

            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </Background>
      </div>
    </InterfaceContextWrap>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
