import { observer } from 'mobx-react'
import * as React from 'react'
import Todo from '../models/todo'

interface ITodoViewProps {
  todo: Todo
}

@observer
export default class extends React.Component<ITodoViewProps, {}> {
  public render() {
    const { todo } = this.props
    return (
      <li>
        <input
          type='checkbox'
          checked={todo.finished}
          onClick={() => todo.finished = !todo.finished}
        /> {todo.title}
      </li>
    )
  }
}
