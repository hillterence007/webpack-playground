import React from 'react'

class Todo extends React.Component {
  render () {
    return (
      <ol>{this.props.item.label}</ol>
    )
  }
}

export default Todo
