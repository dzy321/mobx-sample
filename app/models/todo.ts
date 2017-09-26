import { observable } from 'mobx'

export default class {
  public id = Math.random()
  @observable public title = ''
  @observable public finished = false

  constructor(title: string) {
    this.title = title
  }
}
