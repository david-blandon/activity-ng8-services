import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { Exercise1Component } from './exercise-1/exercise-1.component';
import { ActiveUsersComponent } from './exercise-1/active-users/active-users.component';
import { InactiveUsersComponent } from './exercise-1/inactive-users/inactive-users.component';

import { Exercise2Component } from './exercise-2/exercise-2.component';
import { TodoComponent } from './exercise-2/todo/todo.component';
import { TodoFormComponent } from './exercise-2/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    TodoComponent,
    TodoFormComponent,
    Exercise1Component,
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
