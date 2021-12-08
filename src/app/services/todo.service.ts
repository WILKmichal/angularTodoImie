import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";

import { Todo } from '../models/Todo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';
  private dataSource = new BehaviorSubject<string>("");
  currentData = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  // Get Todos
  getTodos() {
    let data = [];
    if (localStorage.getItem('myData') != null) {
      data = JSON.parse(localStorage.getItem('myData'))
    }
    this.dataSource.next(JSON.stringify(data));
    localStorage.setItem('myData', JSON.stringify(data));
    return data;
  }

  // Delete Todo
  deleteTodo(todo: Todo) {
    const url = `${this.todosUrl}/${todo.id}`;
    //return this.http.delete<Todo>(url, httpOptions);
  }

  // Add Todo
  addTodo(todo: Todo) {
    let data = JSON.parse(localStorage.getItem('myData'));
    data.push(todo);
    localStorage.setItem('myData', JSON.stringify(data));
    this.dataSource.next(JSON.stringify(data));
    return data;
    //return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  // Toggle Completed
  toggleCompleted(todo: Todo) {
    const url = `${this.todosUrl}/${todo.id}`;
    let data = JSON.parse(localStorage.getItem('myData'));
    data.forEach((element, index) => {
      if (element.id != todo.id) {
        data[index].completed = false
      } else {
        data[index].completed = true
      }
    });

    localStorage.setItem('myData', JSON.stringify(data));
    this.dataSource.next(JSON.stringify(data));
    //return this.http.put(url, todo, httpOptions);
  }

  update(todo: Todo) {
    let data = JSON.parse(localStorage.getItem('myData'));
    data.forEach((element, index) => {
      if (element.id == todo.id) {
        data[index] = todo;
      }
    });

    this.dataSource.next(JSON.stringify(data));
    localStorage.setItem('myData', JSON.stringify(data));

    //return this.http.put(url, todo, httpOptions);
  }
}
