import { Component, OnInit, EventEmitter,Output  } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Output() todoCreated = new EventEmitter<Todo>();

  createTodo(title: string, description: string) {
    this.todoCreated.emit(new Todo(title, description));
  }
}
