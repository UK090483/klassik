import React, { useEffect, useState, useContext } from 'react'

import style from './concerts.module.scss'
import Concert from './concert/concert'
import ConcertMob from './concert/concertMob'
import { graphql, useStaticQuery } from 'gatsby'
import Search from './search/search'
import InfiniteScroll from 'react-infinite-scroller'
import InterfaceContext from '../../contexts/InterfaceContext'

export default function Concerts() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allInternalConcerts(sort: { fields: date }) {
        edges {
          node {
            id
            title
            venue
            thumbnail_url
            date
            link_url
            description
          }
        }
      }
    }
  `)
  const INITALCONCERTS = 2
  let concerts = data.allInternalConcerts.edges.slice(INITALCONCERTS)
  let intialConcerts = data.allInternalConcerts.edges.slice(0, INITALCONCERTS)

  const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState(false)
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const { scrolled, isMobile } = useContext(InterfaceContext)

  useEffect(() => {
    setItems[(concerts[0], concerts[1])]
  }, [])

  function loadFunc(page) {
    let anzahl = page * INITALCONCERTS
    doesHaveMore(anzahl)
    let counter = 0
    let res = []
    concerts.forEach(concert => {
      if (counter < anzahl) {
        counter++
        if (concert.node.title) {
          res.push(concert)
        }
      }
    })
    setItems(res)
  }

  function initialPrint() {
    return intialConcerts.map(item => {
      return isMobile ? (
        <ConcertMob key={item.node.id} concert={item}></ConcertMob>
      ) : (
        <Concert key={item.node.id} concert={item}></Concert>
      )
    })
  }

  function doesHaveMore(anzahl) {
    setHasMore(concerts.length > anzahl)
  }

  function renderItems() {
    return items.map(item => {
      return isMobile ? (
        <ConcertMob key={item.node.id} concert={item}></ConcertMob>
      ) : (
        <Concert key={item.node.id} concert={item}></Concert>
      )
    })
  }

  function renderConcerts() {
    if (search) {
      return searchResult.map(concert => {
        if (concert.node.title) {
          return <Concert key={concert.node.id} concert={concert}></Concert>
        }
      })
    } else {
      return (
        <div>
          {initialPrint()}
          <InfiniteScroll
            initialLoad={true}
            pageStart={1}
            loadMore={loadFunc}
            hasMore={hasMore}
            loader={
              <div className="loader" key={0}>
                Loading ...
              </div>
            }
          >
            {renderItems()}
          </InfiniteScroll>
        </div>
      )
    }
  }

  return (
    <div className={style.wrap}>
      {/* <Search
        concerts={concerts}
        searchResult={searchResult}
        setSearchResult={setSearchResult}
        search={search}
        setSearch={setSearch}
      ></Search> */}
      {/* {getC()} */}
      {concerts.length > 0 ? renderConcerts() : <h1>Loading...</h1>}
    </div>
  )
}
