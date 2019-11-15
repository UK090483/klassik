import React, { useContext } from 'react'
import styles from './tcomp.module.scss'
import { UserContext } from '../../Data/DataContext'

export default function Bla() {
  const data = useContext(UserContext)

  return (
    <div onClick={data.logOut} className={data.loggedIn ? styles.a : styles.b}>
      <h1>Blaaa</h1>
    </div>
  )
}
