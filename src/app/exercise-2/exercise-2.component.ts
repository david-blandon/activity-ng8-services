import { Component } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'exercise-2',
  templateUrl: './exercise-2.component.html',
  styleUrls: ['./exercise-2.component.css']
})
export class Exercise2Component {
  todos: Todo[];

  constructor() {
    this.todos = [
      new Todo("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
      new Todo("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
      new Todo("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
    ];
  }

  addTodo(todo) {
    this.todos.unshift(todo);
  }

  deleteTodo(todo) {
    let indexToDelete = this.todos.indexOf(todo);
    if (indexToDelete !== -1) {
      this.todos.splice(indexToDelete,1);
    }
  }
}
