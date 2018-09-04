import React, {Component} from 'react';
import Nav from './Nav.jsx';
import MessagesList from './MessageList.jsx';

const initialState = {
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
    this.state = initialState;
    }

  render(){
    return (
    <div>
      <Nav />
      <MessagesList messages={this.state.messages} />
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" />
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    </div>
    );
  }
}

export default App;

