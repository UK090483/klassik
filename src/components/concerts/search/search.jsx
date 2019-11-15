import React, { useState } from 'react'
import * as fuse from 'fuse.js'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import style from './search.module.scss'

export default function Search({
  concerts,
  searchResult,
  setSearchResult,
  search,
  setSearch,
}) {
  const [startDate, setStartDate] = useState()
  const [showResults, setShowResults] = useState(false)

  var fsearch = new fuse(concerts, {
    keys: ['node.title', 'node.description'],
    threshold: 0.1,
  })

  function Search(e) {
    setShowResults(true)
    setSearch(e)
    setSearchResult(fsearch.search(e))
  }
  function SearchAndClose(e) {
    setShowResults(false)
    setSearch(e)
    setSearchResult(fsearch.search(e))
  }

  function searchResults() {
    return searchResult.map((res, i) => {
      return (
        <h5
          key={i}
          onClick={() => {
            SearchAndClose(res.node.title)
          }}
        >
          {res.node.title}
        </h5>
      )
    })
  }

  return (
    <div className={style.wrap}>
      <div className={style.textSearch}>
        <input
          onKeyPress={e => e.key === 'Enter' && setShowResults(false)}
          onChange={e => Search(e.target.value)}
          type="text"
          value={search}
        />
        {!(search === '') && showResults && (
          <div className={style.searchResult}> {searchResults()}</div>
        )}
      </div>

      <DatePicker
        selected={startDate}
        onChange={setStartDate}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm "
      />
    </div>
  )
}
