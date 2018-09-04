import React, {Component} from 'react';
import MessagesList from './MessageList.jsx'

const examples = {
  currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
}






class App extends Component {
  constructor(props){
    super(props);
    this.state = examples.currentUser.name;
    }

  render(){
    return (
    <div>
      <MessagesList />
    </div>
    );
  }
}

export default App;

