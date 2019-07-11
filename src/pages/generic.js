import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderGeneric from '../components/HeaderGeneric'
import pic04 from '../assets/images/pic04.jpg'
import picture from '../assets/images/services.jpg'

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Courses" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={picture} alt="" />
            </span>
            <header className="major">
              <h2>Our Services</h2>
            </header>
            <ul className="actions">
              <li>
                <h2>
                  <strong>IELTS</strong>
                </h2>
                <p>
                  We make you prepare perfectly for IELTS, our results have
                  shown an assured band above 7 in this test.
                </p>
              </li>
              <li>
                <h2>
                  <strong>Spoken English</strong>
                </h2>
                <p>
                  We create a persona which will reflect your confidence in
                  speaking english after this course. We help you take your
                  confidence to a new level!
                </p>
              </li>
              <li>
                <h2>
                  <strong>PTE</strong>
                </h2>
                <p>
                  We will teach you how to clear this exam with proper tests and
                  official resources of the exam. We have official tests and
                  provide you with alot of practice to ace this exam
                </p>
              </li>
              <li>
                <h2>
                  <strong>Interview Preperation</strong>
                </h2>
                <p>
                  We will make you confident enough to sell yourself to those
                  interviewers and get your dream job. We have wonderful
                  resources to ace that Interview!
                </p>
              </li>
              <li>
                <h2>
                  <strong>Creative Writing And Grammar</strong>
                </h2>
                <p>
                  We will improve students' creative writing skills and english
                  grammar with our top notch training program.
                </p>
              </li>
              <li>
                <h2>
                  <strong>Voice and accent training</strong>
                </h2>
                <p>
                  We will teach how to speak with clients in
                  meetings/discussions and understand different accents and
                  speak them.
                </p>
              </li>
              <li>
                <h2>
                  <strong>Corporate Trainings</strong>
                </h2>
                <p>
                  We also proivde training to employees in a company for
                  Language and effective communication in Spoken English. We
                  provide packages for the same.
                </p>
              </li>
            </ul>
            <h3>
              <a target="_blank" href="https://bit.ly/ksinstitute">
                Book a counselling to know more.
              </a>
            </h3>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Generic
