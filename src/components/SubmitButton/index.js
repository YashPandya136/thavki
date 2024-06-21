import React from 'react'
import { Button } from '../ui/button'
import Loader from '../Loader'

const SubmitButton = ({
  label,
  className,
  loading = false,
  disabled = false,
}) => {
  return (
    <Button className={className} disabled={disabled} size='lg' type='submit'>
    {loading ? (
      <Loader className='w-4 h-4 mx-3 text-primary-foreground' />
    ) : (
      label
    )}
  </Button>
  )
}

export default SubmitButton
