import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

const InputWrapper = ({
  form,
  name,
  title,
  required = false,
  className = '',
  placeholder = '',
  renderComponent,
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel className='text-sm'>{title}</FormLabel>
          <span className='text-lg text-destructive'>{required ? '*' : ''}</span>
          <FormControl>
            {renderComponent({
              className,
              placeholder,
              ...field,
            })}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default InputWrapper
