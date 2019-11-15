import React from 'react'
import styles from './background.module.scss'
import { useStaticQuery, graphql } from 'gatsby'

export default function Background({ children }) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            resolutions(grayscale: true) {
              src
            }
          }
        }
      }
    }
  `)

  const getImages = () => {
    let images = []
    const img = (
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      ></div>
    )
    for (let index = 0; index < 100; index++) {
      images.push(img)
    }
    return images
  }

  const backgroundUrl = data.allImageSharp.edges[5].node.resolutions.src

  return (
    <div className={styles.background}>
      {/* <div className={styles.box}>{getImages()}</div> */}

      {children}
    </div>
  )
}
