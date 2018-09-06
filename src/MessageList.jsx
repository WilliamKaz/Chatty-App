import React from 'react';
import Message from './Message.jsx'



const MessagesList = props => (
  <div className='messages'>
    { props.messages.map( (message,i) =>
      <Message
        key={i}
        username={message.username}
        content={message.content} />
    )}


  </div>
)

export default MessagesList;