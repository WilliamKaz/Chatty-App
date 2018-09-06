import React from 'react';

const Footer = props => (
  <footer>
    <form className="chatbar" onSubmit={props.handleSubmit}>
      <input className="chatbar-username" placeholder="Your Name (Optional)" />
      <input name="inputBox" type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" value={props.inputBox} onChange={props.textIn} />
      <input type="submit" hidden />
    </form>
  </footer>
)


export default Footer;