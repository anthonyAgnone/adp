import React, { Component } from 'react'

export class Patreon extends Component {
  constructor(props) {
    super()
    this.state = { ...props }
  }
  componentWillMount() {
    window.location = this.props.loc
  }
  render() {
    return <section>Redirecting...</section>
  }
}

export default Patreon
