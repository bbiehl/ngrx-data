import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [TodoListComponent],
  declarations: [TodoListComponent],
  imports: [CommonModule]
})
export class TodoListModule {}
