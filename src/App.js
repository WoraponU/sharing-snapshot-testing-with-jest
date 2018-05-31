import React, { Component } from 'react'
import Link from './Link'

class App extends Component {
  render() {
    const { title } = this.props
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              React Testing With Jest
            </h1>
            <h2 className="subtitle">
              worapon 
            </h2>
            <Link link="www.google.com"/>
          </div>
        </div>
      </section>
    )
  }
}

export default App
