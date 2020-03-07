import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('todo') data: Todo;
  @Output() todoDeleted = new EventEmitter<Todo>();

  deleteItem() {
    this.todoDeleted.emit(this.data);
  }

}
