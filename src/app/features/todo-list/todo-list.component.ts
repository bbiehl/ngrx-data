import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from './shared/todo-list.service';
import { Todo } from './shared/todo.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
    isLoading$: Observable<boolean>;
    errors$: Observable<any>;
    todos$: Observable<Todo[]>;

    constructor(private todoListService: TodoListService) {
        this.isLoading$ = this.todoListService.loading$;
        this.errors$ = this.todoListService.errors$;
        this.todos$ = this.todoListService.entities$;
    }

    ngOnInit() {
        this.getTodos();
    }

    private getTodos() {
        this.todoListService.getAll();
    }
}
