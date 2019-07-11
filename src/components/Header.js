import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo ">
      <img src={logo} alt="" />
    </span>
    <h1>K.S. Institute</h1>
    <p>
      We Teach To Communicate
      <br />
      The best english classes in Pune.
    </p>
  </header>
)

export default Header
