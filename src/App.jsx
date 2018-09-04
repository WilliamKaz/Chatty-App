import React, {Component} from 'react';

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

const messagesList = props => (
  <main className='messages'>


  <div class="message">
    <span class="message-username">Anonymous1</span>
    <span class="message-content">I won't be impressed with technology until I can download food.</span>

  </div>

  <div class="message system">
    Anonymous1 changed their name to nomnom.
  </div>
</main>
)



class App extends Component {
  constructor(props){
    super(props);
    this.state = examples.currentUser.name;
    }

  render(){
    return (
    <div>
      <messagesList />
    </div>
    );
  }
}

export default App;

