import React, {Component} from 'react';
import Nav from './Nav.jsx';
import MessagesList from './MessageList.jsx';
import MessageSystem from './MessageSystem.jsx'
import Footer from './Footer.jsx'
const uuidv1 = require('uuid/v1');



// const initialState = {
//   currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
//   messages: [
//     {
//       username: "Bob",
//       content: "Has anyone seen my marbles?",
//     },
//     {
//       username: "Anonymous",
//       content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
//     }
//   ]
// }

class App extends Component {

  constructor(props){
    super(props);
     this.state = {
      currentUser: {name: "Bob"},
      messages: [],
      inputBox: '',
      user: '',
    };
    this.receiveInput = this.receiveInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket('ws://localhost:3001', "protocolOne");
    // this.socket.onopen = (event) =>{
    //   this.socket.send("Here's some text that the server is urgently awaiting!");
    // }
    this.socket.onmessage = (event) => {
      let returnMessage = JSON.parse(event.data);
      this.setState({
        messages: [...this.state.messages, returnMessage]
      })
    }
  }

  sendText(input) {
    // Construct a msg object containing the data the server needs to process the message from the chat client.
    var msg = input;
    // Send the msg object as a JSON-formatted string.
    this.socket.send(JSON.stringify(msg));
  }


  receiveInput(event) {
    this.setState({inputBox: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    let newMessage = {id: uuidv1(), username: this.state.currentUser.name, content: this.state.inputBox };

    this.sendText(newMessage);
    this.setState({
      inputBox: ""
    })
  }


  render(){
    return (
    <div>
      <main>
        <Nav />
        <MessagesList messages={this.state.messages} />
        <MessageSystem />
      </main>
      <Footer currentUser={this.state.currentUser.name} inputBox={this.state.inputBox} textIn={this.receiveInput} handleSubmit={this.handleSubmit} />
    </div>
    );
  }
}

export default App;

