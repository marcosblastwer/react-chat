import React, { FunctionComponent } from 'react'

import { Container, Content } from './styles'

interface ISystemMessageProps {
  content: string
}

const SystemMessage: FunctionComponent<ISystemMessageProps> = ({ content }) => {
  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  )
}

export default SystemMessage
