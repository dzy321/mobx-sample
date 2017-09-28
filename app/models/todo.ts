import { types } from 'mobx-state-tree'

export default types.model('todo', {
  id: types.identifier(types.string),
  title: types.string,
  finished: false
}).actions((self) => ({
  toggle() {
    self.finished = !self.finished
  }
}))
