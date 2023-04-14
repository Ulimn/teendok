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
      'https://app-re-azure-ing-demo.azurewebsites.net/api/TodoService?code=HJF7sPQntN9RRXyaCi43FRfkvaUkckS9h-c4r0PwL5KVAzFuVN9wQA=='
    );
  }
}
