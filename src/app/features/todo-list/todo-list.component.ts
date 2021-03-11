import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from './shared/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  isLoading$: Observable<boolean>;
  errors$: Observable<any>;
  todos$: Observable<any>;

  constructor(private todoListService: TodoListService) {
    this.isLoading$ = this.todoListService.loading$;
    this.errors$ = this.todoListService.errors$;
    this.todos$ = this.todoListService.getAll();
  }
}
