import { computed, observable } from 'mobx'
import Todo from './todo'

export default class {
  @observable public todos: Todo[] = []
  @computed public get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length
  }

  public init() {
    this.todos.push(new Todo('iphone'))
    this.todos.push(new Todo('huawei'))
    this.todos.push(new Todo('xiaomi'))
    this.todos.push(new Todo('meizu'))
  }
}
