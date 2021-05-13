import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import { io } from 'socket.io-client'

import { 
  Container, 
  Header,
  Content, 
  Sender,
  Sidebar
} from './styles'

import keyboard from '../../utils/keyboard'
import Message from '../../domain/models/Message'
import MessageList from '../../components/MessageList'
import UserList from '../../components/UserList'
import TextField from '../../components/shared/TextField'
import Welcome from '../../components/Welcome'

const socket = io('http://localhost:4000')

interface IUserPayload {
  user: string
  userList: string[]
}

interface IChatProps {
  user: string
  onLogout(): void
}
const Chat: FunctionComponent<IChatProps> = ({ user, onLogout }) => {
  const [users, setUsers] = useState<string[]>([])
  const [messages, setMessages] = useState<Message[]>([])
  const contentElement = useRef(null)

  const handleUserConnected = (payload: IUserPayload) => {
    setUsers(payload.userList)

    const message = new Message('', `${payload.user} just joined the chat.`)
    handleMessage(message)
  }

  const handleUserDisconnected = (payload: IUserPayload) => {
    setUsers(payload.userList)
  }

  const handleMessage = (message: Message) => {
    setMessages(previousMessages => ([...previousMessages, message]))
  }

  const handleMessageTyped = (event: React.KeyboardEvent): void => {
    const target = event.target as HTMLInputElement
    const content = target.value.trim()
    if (event.key === keyboard.ENTER && content) {
      const message = new Message(user, content)
      target.value = ''
      socket.emit('message', message)
    }
  }

  const handleLogout = () => {
    socket.off('user connected')
    socket.off('user disconnected')
    socket.off('message')
    socket.emit('logout', user)
    onLogout()
  }

  useEffect(() => {
    const nullableDiv: HTMLDivElement | null = contentElement?.current
    if (nullableDiv) {
      const div = nullableDiv as HTMLDivElement
      div.scrollTop = div.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    socket.on('user connected', payload => handleUserConnected(payload))
    socket.on('user disconnected', payload => handleUserDisconnected(payload))
    socket.on('message', payload => handleMessage(payload))
    socket.emit('login', user)
  }, []);

  return (
    <Container>
      <Header>
        <Welcome
          user={user}
          onLogout={() => handleLogout()}
        />
      </Header>
      <Sidebar>
        <UserList users={users} />
      </Sidebar>
      <Content ref={contentElement}>
        <MessageList 
          user={user} 
          messages={messages}
        />
      </Content>
      <Sender>
        <TextField
          autoFocus={true}
          onKeyUp={e => handleMessageTyped(e)}
        />
      </Sender>
    </Container>
  )
}

export default Chat
