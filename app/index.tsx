import * as React from 'react'
import * as ReactDOM from 'react-dom'
import TodoListView from './components/todo-list-view'
import TodoList from './models/todo-list'

const store = new TodoList()

store.init()

ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('app'))
