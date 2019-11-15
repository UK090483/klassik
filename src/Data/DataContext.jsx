import React, { useState, useEffect, useContext } from 'react'
import {
  FirebaseContext,
  useFirebase,
} from '../../plugins/gatsby-plugin-firebase'

const UserContext = React.createContext(null)

const AddData = ({ children }) => {
  const [user, setUser] = useState()
  const firebase = useContext(FirebaseContext)
  const [readyToFetch, setReadyToFetch] = useState(false)

  useFirebase(firebase => {
    setReadyToFetch(true)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  }, [])

  const signUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error.message)
        // ...
      })
  }
  const logIn = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        console.log(error.message)
        // ...
      })
  }
  const signOut = () => {
    firebase.auth().signOut()
  }

  const getConcerts = () => {
    let db = firebase.firestore()
    return db
      .collection('concerts')
      .get()
      .then(function(querySnapshot) {
        let res = []
        querySnapshot.forEach(function(doc) {
          let item = doc.data()
          item.id = doc.id
          res.push(item)
          // console.log(doc.id, ' => ', doc.data())
        })
        return res
      })
  }

  return (
    <UserContext.Provider
      value={{
        readyToFetch: readyToFetch,
        getConcerts: getConcerts,
        signUp: signUp,
        logIn: logIn,
        user: user,
        signOut: signOut,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default AddData

export { UserContext }
