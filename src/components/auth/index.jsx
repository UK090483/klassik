import React, { useState, useContext } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import { DialogContent } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import { UserContext } from '../../Data/DataContext'

import Loggedin from './Loggedin'
import Signup from './Signup'

function MyComponent() {
  const [open, setOpen] = useState(false)
  const data = useContext(UserContext)

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
      >
        <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
        <DialogContent>
          <Signup setOpen={setOpen} data={data}></Signup>
        </DialogContent>
      </Dialog>
      {data.user ? (
        <Loggedin user={data.user} signOut={data.signOut}></Loggedin>
      ) : (
        <Button
          onClick={() => {
            setOpen(true)
          }}
        >
          LogIn
        </Button>
      )}
    </div>
  )
}

export default MyComponent
