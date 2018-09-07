import React from 'react';

const Nav = props =>(
  <div className="navbar">
    <nav className="a">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>

    <div className="b">
      <p>{props.count} users online</p>
    </div>
  </div>
)

export default Nav;