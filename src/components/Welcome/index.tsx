import React, { FunctionComponent } from 'react'
import { MdArrowBack } from 'react-icons/md';

import { Container, GoBackButton, InfoContainer, UserWelcome, Instructions } from './styles'

interface IWelcomeProps {
  user: string
  onLogout(): void
}
const Welcome: FunctionComponent<IWelcomeProps> = ({ user, onLogout }) => {
  return (
    <Container>
      <GoBackButton onClick={() => onLogout && onLogout()}>
        <MdArrowBack />
      </GoBackButton>
      <InfoContainer>
        <UserWelcome>Welcome {user}</UserWelcome>
        <Instructions>
          Call your friends or open a new browser page to chat and test.
        </Instructions>
      </InfoContainer>
    </Container>
  )
}

export default Welcome
