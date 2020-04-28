import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Contact us!</h2>
      <p>
        Feel free to contact us for any queries, we are available from 8am to
        10pm
      </p>
      <ul className="actions">
        <li>
          <Link to="/book" className="button">
            Learn More
          </Link>
        </li>
      </ul>
    </section>
    <section>
      <h2>Give us a visit and book a counselling!</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>
          {' '}
          Shop number 104 Rose icon complex &bull; , Pimple Saudagar, Pune,
          Maharashtra 411027 &bull; India
        </dd>
        <dd>
          {' '}
        Shop no 10, Krishna Market, megapolis circle Hinjewadi phase 3
        </dd>
        <dt>Phone</dt>
        <dd>9823397800, 9823833280</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">ksinstitute@hotmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a href="#" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-github alt">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; KS INSTITUTE{' '}
      <a target="_blank" href="https://bit.ly/ksinstitute">
        Enquire
      </a>
      .
    </p>
  </footer>
)

export default Footer
