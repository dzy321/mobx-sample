import { types } from 'mobx-state-tree'
import Todo from './todo'

export default types.model('todoList', {
  todos: types.array(Todo)
}).views((self) => ({
  get unfinishedTodoCount() {
    return self.todos.filter((todo) => !todo.finished).length
  }
}))
