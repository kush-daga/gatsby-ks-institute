import React from 'react'

import logo from '../assets/images/logo.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo ">
      <img src={logo} alt="" />
    </span>
    <h1>
      <strong>K.S. INSTITUTE</strong>
    </h1>
    <p style={{ marginBottom: 0 }}>
      <strong>We Teach To Communicate</strong>
    </p>
    <p>
      <strong>The best English classes in Pune.</strong>
    </p>
  </header>
)

export default Header
