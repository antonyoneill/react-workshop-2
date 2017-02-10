import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {
  toggleTodo() {
    debugger
    this.props.dispatch({ type: 'TOGGLE_TODO', id: this.props.todo.id})
  }

  render() {
    return (
      <li key={this.props.todo.id}>
        <p>{this.props.todo.text}</p>
      <button onClick={this.toggleTodo.bind(this)}>{ this.props.todo.done ? 'DONE' : 'Not done!' }</button>
      </li>
    )
  }
}
Todo.propTypes = {
  todo: React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired
  })
}

const Connected = connect()(Todo)
export default Connected
