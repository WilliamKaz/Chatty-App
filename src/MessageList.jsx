import React from 'react';
import Message from './Message.jsx';
import MessageSystem from './MessageSystem.jsx';



const MessagesList = props => (
  <div className='messages'>
    { props.messages.map( (message,i) =>
      (message.type === 'postMessage') ?(
        <Message
          key={i}
          username={message.username}
          content={message.content} />
        ): (
        <MessageSystem
          key={i}
          content={message.content} />
          )
    )}
  </div>
)

export default MessagesList;