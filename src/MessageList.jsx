import React from 'react';
import Message from './Message.jsx'
import MessagesSystem from './MessageSystem.jsx'


const MessagesList = props => (
  <main className='messages'>
    { props.messages.map( (message,i) =>
      <Message
        key={i}
        username={message.username}
        content={message.content} />
    )}

    <MessageSystem />
  </main>
)

export default MessagesList;