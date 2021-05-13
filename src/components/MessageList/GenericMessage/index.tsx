import React, { FunctionComponent } from 'react'

import { Container, Wrapper, Content, Username } from './styles'

interface IGenericMessageProps {
  user: string
  content: string
}

const GenericMessage: FunctionComponent<IGenericMessageProps> = ({ user, content }) => {
  return (
    <Container>
      <Wrapper>
        <Username>{user}</Username>
        <Content>{content}</Content>
      </Wrapper>
    </Container>
  )
}

export default GenericMessage
