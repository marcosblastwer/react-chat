import React, { FunctionComponent } from 'react'
import { MdAccountCircle } from 'react-icons/md'

import { 
  Container, 
  List, 
  ListItem, 
  Icon,
  Username,
  Title } from './styles'

interface IUserList {
  users: string[]
}
const UserList: FunctionComponent<IUserList> = ({ users }) => {
  return (
    <Container>
      <Title>Logged users</Title>
      <List>
        {
          users.map(user => {
            return (
              <ListItem key={user}>
                <Icon>
                  <MdAccountCircle />
                </Icon>
                <Username>{user}</Username>
              </ListItem>
            )
          })
        }
      </List>
    </Container>
  )
}

export default UserList
