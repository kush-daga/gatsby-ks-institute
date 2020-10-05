import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import HeaderBook from '../components/HeaderBook'
import pic04 from '../assets/images/pic04.jpg'

class Book extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Book Counselling!" />
        <HeaderBook />
        <div id="main">
          <section id="content" className="main">
            <h2>How to book?</h2>
            <p>
              To book a counselling please contact us on{' '}
              <strong>9823397800</strong> also it would be
              recommended that you fill out the{' '}
              <span>
                <a target="_blank" href="https://bit.ly/ksinstitute">
                  <strong>enquiry form</strong>
                </a>
              </span>{' '}
              before contacting, and let us know if you did so.
            </p>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Book
