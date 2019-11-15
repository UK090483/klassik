import React from 'react'
import Input from '../../utils/Input'
import Box from '@material-ui/core/Box'

export default function form({ onChange, handleSubmit, logSign }) {
  const handleFormSubmit = e => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <Box mb={5} mx="auto">
      {logSign && (
        <Input label="Name" name="name" type="text" onChange={onChange} />
      )}
      <Input label="Email" name="email" type="text" onChange={onChange} />
      <Input label="Password" name="password" type="text" onChange={onChange} />
    </Box>
  )
}
