import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  
  @Input() todos: Todo[]

  @Output()
  update: EventEmitter<Todo> = new EventEmitter();

  @Output()
  delete: EventEmitter<Todo> = new EventEmitter();

  ngOnInit() {
  }

  onUpdateTodo(todo: Todo) {
    this.update.emit(todo);
  }

  onDeleteTodo(todo: Todo) {
    this.delete.emit(todo);
  }


}
