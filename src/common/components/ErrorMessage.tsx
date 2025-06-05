import React from 'react'
import { Alert } from '@mui/material'

interface ErrorMEssageProps {
    errorMessage: string;
}
const ErrorMessage = ({errorMessage}: ErrorMEssageProps) => {
  return (
    <Alert severity="error">{errorMessage}</Alert>
  )
}

export default ErrorMessage
