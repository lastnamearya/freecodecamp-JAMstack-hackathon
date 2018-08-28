import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>
      I'm participating in the upcoming freecodecamp JAMstack hackathon. Follow
      me on twitter for further updates{' '}
      <a target="_blank" href="https://twitter.com/lastnamearya">
        lastnamearya
      </a>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
