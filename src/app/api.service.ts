import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Todo } from './todo'
import { Observable } from 'rxjs'

@Injectable()

export class ApiService {

  constructor(private http: Http) { }

  private url: string = `http://localhost:3000/todos`

  public getAllTodos(): Observable<Todo[]> {
    return this.http.get(this.url).map(response => {
      const todos = response.json();
      return todos.map((todo) => new Todo(todo));
    })
  }

  public addTodo(todo: Todo): Observable<Todo> {
    return this.http.post(this.url, todo).map( response => {
      return new Todo(response.json())
    })
  }

  public updateTodo(todo: Todo): Observable<Todo> {
    const id = todo.id
    return this.http.put(`${this.url}/${id}`, todo).map( response => {
      const updatedToDo = new Todo(response.json())
      return updatedToDo
    })
  }

  public deleteTodo(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
