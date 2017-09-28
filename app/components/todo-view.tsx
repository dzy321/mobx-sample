import { observer } from 'mobx-react'
import * as React from 'react'
import Todo from '../models/todo'

interface ITodoViewProps {
  todo: typeof Todo.Type
}

export default observer(
  (props: ITodoViewProps) => {
    const { todo } = props
    return (
      <li>
        <input
          type='checkbox'
          checked={todo.finished}
          onClick={() => todo.toggle()}
        /> {todo.title}
      </li>
    )
  }
)
