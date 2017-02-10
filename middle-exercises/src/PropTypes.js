import React, {Component, PropTypes} from 'react'

export default class PropTypesExercise extends Component {
  render() {
    return (
      <div >
        <HelloPerson/>
        <OtherHelloPerson name="Jasper"/>
      </div>
    )
  }
}

class HelloPerson extends Component {
  render() {
    return (
      <p>Hello, {this.props.name}</p>
    )
  }
}

HelloPerson.propTypes = {
  name: PropTypes.string.isRequired
}

HelloPerson.defaultProps = {
  name: "Antony"
}

const OtherHelloPerson = props => (
  <p>OtherHello, {props.name}</p>
)

OtherHelloPerson.propTypes = {
  name: PropTypes.string.isRequired
}
