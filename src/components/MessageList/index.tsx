import React, { FunctionComponent } from 'react'

import { Container} from './styles'
import GenericMessage from './GenericMessage'
import LoggedUserMessage from './LoggedUserMessage'
import SystemMessage from './SystemMessage'
import Message from '../../domain/models/Message'

interface MessageListProps {
  user: string
  messages: Message[]
}

const MessageList: FunctionComponent<MessageListProps> = ({ user, messages }) => {
  return (
    <Container>
      {
        messages.map(message => {
          const { id, user: messageUser, content } = message

          if (!messageUser)
            return <SystemMessage key={id} content={content} />
          else if (messageUser === user)
            return <LoggedUserMessage key={id} content={content} />
          else
            return <GenericMessage key={id} user={user} content={content} />
        })
      }
    </Container>
  )
}

export default MessageList
