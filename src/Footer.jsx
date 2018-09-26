import React from 'react';

const Footer = props => (
  <footer>
    <div className="chatbar" >
      <form action="" onSubmit={props.handleNameChange} className='a'>
        <input className=' chatbar-username' placeholder="Your Name (Optional)"  name="userBox"  value={props.userBox}  onChange={props.textInUser} type="text"/>
        <input type="submit" hidden />
      </form>
      <form  onSubmit={props.handleSubmit} className=' chatbar-message'>
        <input name="inputBox" type="text" className="b" placeholder="Type a message and hit ENTER" value={props.inputBox} onChange={props.textIn} />
        <input type="submit" hidden />
      </form>
    </div>
  </footer>
)


export default Footer;


// defaultValue={props.userNameStar}