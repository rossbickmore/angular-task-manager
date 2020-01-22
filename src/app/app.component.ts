import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  constructor(
    private todoDataService: TodoDataService
  ) {
  } 

  public ngOnInit() {
    this.todoDataService.getAllTodos().subscribe( (todos) => this.todos = todos  )
  }

  public onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo).subscribe( todo => this.todos.push(todo))
  }

  public onUpdateTodo(todo: Todo) {
    console.log(todo)
    const updatedToDo = new Todo({...todo, complete: true})
    const id = todo.id
    return this.todoDataService.updateTodo(updatedToDo).subscribe( 
      todo => {
        this.todos = this.todos.map( todo => id === todo.id ? updatedToDo : todo)
      })
  }

  public onDeleteTodo(todo: Todo) {
    const id = todo.id
    return this.todoDataService.deleteTodo(id).subscribe(
      todo => {
        this.todos = this.todos.filter( todo => id !== todo.id)
      }
    )
  }
}
