import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Box from '@material-ui/core/Box'

import Form from './Form'

function Signup({ setOpen, data }) {
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [logSign, setLogSign] = useState()

  const handleSubmit = () => {
    if (logSign) {
      data.signUp(email, password)
    } else {
      data.logIn(email, password)
    }
    setOpen(false)
  }

  const handleChange = (e, name) => {
    if (name === 'email') {
      setEmail(e.target.value)
    }
    if (name === 'password') {
      setPassword(e.target.value)
    }
    if (name === 'name') {
      setName(e.target.value)
    }
  }

  const setUserName = _name => {
    // firebase
    //   .auth()
    //   .currentUser.updateProfile({
    //     displayName: _name,
    //   })
    //   .catch(error => {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(error.message);
    //     // ...
    //   });
  }

  return (
    <div>
      <Box width={300} m={3} mx="auto">
        <Form
          onChange={handleChange}
          handleSubmit={handleSubmit}
          logSign={logSign}
        />

        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button
            onClick={() => {
              setOpen(false)
            }}
          >
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button
            onClick={() => {
              setLogSign(!logSign)
            }}
          >
            {' '}
            {logSign ? 'LogIn' : 'SignIn'}
          </Button>
        </ButtonGroup>
      </Box>
    </div>
  )
}

export default Signup
