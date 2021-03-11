import { Injectable } from '@angular/core';
import {
    EntityCollectionServiceBase,
    EntityCollectionServiceElementsFactory,
} from '@ngrx/data';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root',
})
export class TodoListService extends EntityCollectionServiceBase<Todo> {
    constructor(
        serviceElementsFactory: EntityCollectionServiceElementsFactory
    ) {
        super('todo', serviceElementsFactory);
    }
}
