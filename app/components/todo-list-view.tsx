import { observer } from 'mobx-react'
import * as React from 'react'
import TodoList from '../models/todo-list'
import TodoView from './todo-view'

interface ITodoListViewProps {
  todoList: TodoList
}

@observer
export default class extends React.Component<ITodoListViewProps, {}> {
  public render() {
    return (
      <div>
        <ul>
          {
            this.props.todoList.todos.map((todo) => {
              return <TodoView todo={todo} key={todo.id} />
            })
          }
        </ul>
        Tasks left: {this.props.todoList.unfinishedTodoCount}
      </div>
    )
  }
}
