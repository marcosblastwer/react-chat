import React, { FunctionComponent } from 'react'

import { Input } from './styles'

interface ITextFieldProps {
  autoFocus?: boolean
  value?: string
  onChange?(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
  onKeyUp?(event: React.KeyboardEvent): void
}

const TextField: FunctionComponent<ITextFieldProps> = ({ autoFocus, value, onChange, onKeyUp }) => {
  return (
    <Input
      type='text'
      value={value}
      autoFocus={!!autoFocus}
      onChange={ e => onChange && onChange(e) }
      onKeyUp={ e => onKeyUp && onKeyUp(e) }
    />
  )
}

export default TextField
