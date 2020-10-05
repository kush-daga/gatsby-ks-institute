import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import pic01 from '../assets/images/pic01.jpg'
import mompic from '../assets/images/mom2.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="K.S. INSTITUTE">
            <meta name="description" content="We offer Spoken English, IELTS, PTE classes for everyone. Book a counselling now to improve your spoken english or ace the IELTS/PTE Examinations." />
        </Helmet>
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Who we are</h2>
                </header>
                <p>
                  Founded in the year 2005, Ks Institute is an institute that
                  aids in the development and refinement of one's English
                  communication skills. This establishment was built with an aim
                  to become one of the best language training institutes in the
                  region. This organisation was set up with a view to train and
                  develop its students with high-quality communicative English
                  through individual attention and overall personality
                  development. It is well-known as a centre for learning English
                  for competitive examinations as well as for effective
                  communication. Over the years, they have trained countless
                  citizens belonging to different walks of life; from students
                  to working professionals. With years of experience in this
                  field under their belt, they have established a repute for
                  their quality teaching methods that help them understand the
                  specific requirements of every learner at their institute.
                  Undoubtedly it is one of the best language class for English
                  in Pune.
                </p>
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Our Services</h2>
              <p>
                {/* We promise you new confidence and more importantly, a new
                attitude. We do that by getting to know you, your needs, In the
                end helping you to build your language perfectly.
                <br></br> */}
                We understand your requirements and try to fulfill them by not
                only giving you the right guidance but also mentoring you to
                achieve your goals, overall making your language reach new
                heights of perfection.
                <br />
                We provide both <strong>offline and online </strong>batches,
                book a counselling to know more.
              </p>
            </header>
            <ul className="statistics">
              <li className="style1">
                <span className="icon fa-code-fork"></span>
                <strong>Spoken English</strong>
              </li>
              <li className="style2">
                <span className="icon fa-folder-open-o"></span>
                <strong>IELTS</strong>
              </li>
              <li className="style3">
                <span className="icon fa-signal"></span>
                <strong>PTE</strong>
              </li>
              <li className="style4">
                <span className="icon fa-laptop"></span>
                <strong>Interview prep</strong>
              </li>
              <li className="style5">
                <span className="icon "></span>
                <strong>
                  <Link to="/generic">And more..</Link>
                </strong>
              </li>
              <br />
            </ul>
            <p className="content"></p>
            <footer className="major">
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
          <section id="second" className="main special">
            <header className="major">
              <h2>Our Team</h2>
            </header>
            <ul className="features">
              <li>
                <span
                  className="icon major style1 image"
                  style={{ border: 'none' }}
                >
                  <img
                    src={mompic}
                    alt="img"
                    width="150px"
                    height="150px"
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                  ></img>
                </span>
                <h3>Gagan Daga</h3>
                <h5>Center Director and Instructor</h5>
                <p>
                  With over 15 years of experience in traning English and its
                  nuances to students, Gagan is the best tutor you can find when
                  it comes to PTE, IELTS, Spoken English, etc. She has been
                  trained officialy to give IELTS and PTE coaching and has an
                  experience of teaching Spoken English even to Italians! She is
                  experienced in teaching people with very less knowledge of the
                  language, people who have not studied in English medium and
                  corporates who are looking to improve the way they talk to
                  thier clients
                </p>
              </li>
            </ul>
            <footer className="major"></footer>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Book a counselling now!</h2>
              <p>
                Contact us or book a counselling now to learn more and interact
                with our instructor.
              </p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li>
                  <a
                    target="_blank"
                    href="https://bit.ly/ksinstitute"
                    className="button special"
                  >
                    Fill the enquiry form!
                  </a>
                </li>
                <li>
                  <Link to="/book" className="button">
                    Book a counselling!
                  </Link>
                </li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Index
