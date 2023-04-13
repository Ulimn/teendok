import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Todo, TodoListResponse } from './types';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList(): Observable<TodoListResponse> {
    return this.http.get<TodoListResponse>(
      'http://localhost:60370/api/TodoService'
    );
  }
}
