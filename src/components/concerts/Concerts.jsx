import React, { useContext, useEffect, useState } from 'react'

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
  const [search, setSearch] = useState('')
  const [items, setItems] = useState('')

  function loadFunc(page) {
    let anzahl = page * 2
    let counter = 0
    let res = concerts.map(concert => {
      if (counter < anzahl) {
        counter++
        if (concert.node.title) {
          return <Concert key={concert.node.id} concert={concert}></Concert>
        }
      }
    })
    setItems(res)
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
          pageStart={0}
          loadMore={loadFunc}
          hasMore={true}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {items}
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
