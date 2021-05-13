import React, { FunctionComponent } from 'react'

import { Container, Content } from './styles'

interface ILoggerUserMessageProps {
  content: string
}

const LoggerUserMessage: FunctionComponent<ILoggerUserMessageProps> = ({ content }) => {
  return (
    <Container>
      <Content>{content}</Content>
    </Container>
  )
}

export default LoggerUserMessage
