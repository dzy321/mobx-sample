import { Slider } from 'antd'
import { inject, observer } from 'mobx-react'
import * as React from 'react'
import TodoList from '../models/todo-list'
import TodoView from './todo-view'

interface ITodoListViewProps {
  todoList?: typeof TodoList.Type
}

@inject('todoList') @observer
export default class extends React.Component<ITodoListViewProps, any> {
  public render() {
    const { todoList } = this.props
    return (
      <div>
        <Slider />
        <ul>
          {
            todoList!.todos.map((todo) => {
              return <TodoView todo={todo} key={todo.id} />
            })
          }
        </ul>
        Tasks left: {todoList!.unfinishedTodoCount}
      </div>
    )
  }
}
