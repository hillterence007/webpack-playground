import React from 'react'
import Todo from '../Todo'

class Todos extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [
        {
          'id': 1,
          'label': 'Lorem',
          'order': 2
        }
      ]
    }
  }

  render () {
    const todos = this.state.items.sort((a, b) => a.order > b.order).map((item, i) => (
      <Todo key={item.id} item={item} />
    ))

    return (
      <ul className='todoList'>
        {todos}
      </ul>
    )
  }
}

export default Todos
