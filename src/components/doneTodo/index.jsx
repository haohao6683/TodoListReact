import React from 'react'
import Todo from '../todo'

class DoneTodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.todoList.map((todo, index) => {
          if (todo.status) {
            return <Todo key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        status={todo.status}
                        changeStatus={this.changeStatus}    
                        deleteTodo={this.deleteTodo} />
          }
        })}
      </div>
    )
  }
}

export default DoneTodoList 