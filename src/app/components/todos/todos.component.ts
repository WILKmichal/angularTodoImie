import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

import { Todo } from '../../models/Todo';
import { cpuUsage } from 'process';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  

  todos:Todo[]= [];
 // todoos = this.todos.asObservable();

  constructor(private todoService:TodoService) {
   }

  ngOnInit() {
    // this.todoService.getTodos().subscribe(todos => {
    //   this.todos = todos;
    // });
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(todo:Todo) {
    // Remove From UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove from server
    // this.todoService.deleteTodo(todo);
    let data = JSON.parse(localStorage.getItem('myData'));
    data = this.todos.filter(t => t.id !== todo.id);
    localStorage.setItem('myData', JSON.stringify(data));
  }

  addTodo(todo:Todo) {
    this.todos.push(todo);
  }

}
