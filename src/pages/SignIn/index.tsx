import React, { FunctionComponent, useState } from 'react'

import { Container, FieldContainer, FieldLabel } from './styles'
import keyboard from '../../utils/keyboard'
import TextField from '../../components/shared/TextField'

interface ISignInProps {
  onSignIn(loggedUser: string): void
}

const SignIn: FunctionComponent<ISignInProps> = ({ onSignIn }) => {

  const [user, setUser] = useState<string>('')

  const handleKeyUp = (event: React.KeyboardEvent): void => {
    if (event.key === keyboard.ENTER)
      handleSignIn()
  }

  const handleSignIn = (event: React.MouseEvent | undefined = undefined): void => {
    if (event)
      event.preventDefault()

    if (!!user && onSignIn)
      onSignIn(user)
  }

  return (
    <Container>
      <FieldLabel>Type your name and press ENTER to chat</FieldLabel>
      <FieldContainer>
        <TextField 
          autoFocus
          onChange={e => setUser(e.currentTarget.value)}
          onKeyUp={e => handleKeyUp(e)}
        />
      </FieldContainer>
    </Container>
  )
}

export default SignIn
