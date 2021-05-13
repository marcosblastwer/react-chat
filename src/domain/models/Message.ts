import { v4 } from 'uuid'

export default class Message {
  constructor(
    _user: string,
    _content: string
  ) {
    this.id = v4()
    this.user = _user
    this.content = _content
    this.timestamp = new Date()
  }

  id: string
  user: string
  content: string
  timestamp: Date
}
