import React, { Component } from 'react'

class Link extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: 5
    };
  }

  render() {
    const { link } = this.props
    return (
      <div>
        link: <a href={link} target="_blank">{link}</a>
      </div>
    )
  }
}

export default Link
