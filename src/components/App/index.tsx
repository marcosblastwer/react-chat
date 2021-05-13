import React, { FunctionComponent, useState } from "react"

import { Container, Message } from './styles'
import Chat from '../../pages/Chat'
import SignIn from '../../pages/SignIn'

const App: FunctionComponent = () => {
  const [user, setUser] = useState<string | undefined>(undefined)

  const handleLogout = (): void => {
    setUser(undefined)
  }

  const handleLogin = (loggedUser: string): void => {
    setUser(loggedUser)
  }

  const renderChat = (): React.ReactNode => {
    const loggedUser = String(user)

    return (
      <Chat 
        user={ loggedUser } 
        onLogout={ () => handleLogout() }
      />
    )
  }

  const renderSignIn = (): React.ReactNode => {
    return <SignIn onSignIn={ loggedUser => handleLogin(loggedUser) } />
  }

  return (
    <Container>
      {
        user 
          ? renderChat()
          : renderSignIn()
      }
    </Container>
  )
}

export default App
