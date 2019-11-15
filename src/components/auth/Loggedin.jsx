import React from 'react'

export default function Loggedin({ user, signOut }) {
  return (
    <div>
      <p>Hello {user ? user.displayName : 'there'}</p>
      <button onClick={signOut}>Log Out</button>
    </div>
  )
}
