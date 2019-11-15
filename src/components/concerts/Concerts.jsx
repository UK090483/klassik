import React, { useEffect, useState } from 'react'

import style from './concerts.module.scss'
import Concert from './concert/concert'
import { graphql, useStaticQuery } from 'gatsby'
import Search from './search/search'
import InfiniteScroll from 'react-infinite-scroller'

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

  let concerts = data.allInternalConcerts.edges
  const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState(false)
  const [items, setItems] = useState([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    setItems[(concerts[0], concerts[1])]
  }, [])

  function loadFunc(page) {
    let anzahl = page * 2
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

  function doesHaveMore(anzahl) {
    setHasMore(concerts.length > anzahl)
  }

  function renderItems() {
    return items.map(item => {
      return <Concert key={item.node.id} concert={item}></Concert>
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
