import { Injectable } from '@angular/core';
import { ApiService } from './api.service'
import { map } from 'rxjs/operators'
import { Todo } from './todo'

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  public getAllTodos() {
    return this.api.getAllTodos()
  }

  public addTodo(todo: Todo) {
    return this.api.addTodo(todo)
  }

  public updateTodo(todo: Todo) {
    return this.api.updateTodo(todo)
  }

  public deleteTodo(id: number) {
    return this.api.deleteTodo(id)
  }
}
