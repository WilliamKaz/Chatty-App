import React, {Component} from 'react';
import Nav from './Nav.jsx';
import MessagesList from './MessageList.jsx';
import MessageSystem from './MessageSystem.jsx'
import Footer from './Footer.jsx'
const uuidv1 = require('uuid/v1');

class App extends Component {

  constructor(props){
    super(props);
     this.state = {
      currentUser:  "Anonimous1",
      messages: [],
      inputBox: '',
      userBox: '',
      userCount: 0
    };
    this.receiveInput = this.receiveInput.bind(this);
    this.receiveUserName = this.receiveUserName.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.socket = new WebSocket('ws://localhost:3001', "protocolOne");
    // this.socket.onopen = (event) =>{
    //   this.socket.send("Here's some text that the server is urgently awaiting!");
    // }
    this.socket.onmessage = (event) => {

      let dat =  JSON.parse(event.data);
      console.log(dat);
      if (dat.type == 'notificationMessage'|| dat.type == 'postMessage'){
        let returnMessage = dat;
        this.setState({
          messages: [...this.state.messages, returnMessage]
        })
      } else if( dat.type == 'count'){
        this.setState({
          userCount: dat.users
        })
      }
      else {
        alert('nope');
      }
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

   receiveUserName(event) {
    this.setState({userBox: event.target.value})
  }

  handleNameChange(event){
    event.preventDefault();
    if(this.state.userBox != ''){

    let newMessage = {
      type: 'notificationMessage',
      id: uuidv1(),
      content:`${this.state.currentUser} has changed their name to ${this.state.userBox}`
    };

    this.sendText(newMessage);
      this.setState({
        currentUser : this.state.userBox
      })

    } else if (this.state.currentUser == 'Anonymous') {

    } else {

      this.setState({
        currentUser : 'Anonymous'
      })

      let newMessage = {
        type: 'notificationMessage',
        id: uuidv1(),
        content:`${this.state.currentUser} is now Anonymous`
      };
      this.sendText(newMessage);

    }
  }


  handleSubmit(event) {
    event.preventDefault()
    let newMessage = {type: 'postMessage',  id: uuidv1(), username: this.state.currentUser, content: this.state.inputBox, };
    this.sendText(newMessage);
    this.setState({
      inputBox: ""
    })
  }

  render(){
    return (
    <div>
      <main>
        <Nav count={this.state.userCount}/>
        <MessagesList  messages={this.state.messages} />
      </main>
      <Footer currentUser={this.state.currentUser.name} inputBox={this.state.inputBox} textIn={this.receiveInput} textInUser={this.receiveUserName} handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} />
    </div>
    );
  }
}

export default App;