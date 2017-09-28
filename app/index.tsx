import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TodoListView from './components/todo-list-view'
import TodoList from './models/todo-list'

useStrict(true)

const store = TodoList.create({
  todos: [
    { id: '1', title: 'iphone' },
    { id: '2', title: 'htc' },
    { id: '3', title: 'samsung' },
    { id: '4', title: 'xiaomi' },
    { id: '5', title: 'huawei' }
  ]
})

ReactDOM.render(
  <Provider todoList={store}>
    <TodoListView />
  </Provider>,
  document.getElementById('app'))
