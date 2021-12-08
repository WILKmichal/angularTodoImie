import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  todos: Todo[];
  data: String[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    //  this.todoService.currentData.subscribe((e)=> this.todos.push(JSON.parse(e)));
    this.todoService.currentData.subscribe((e) => {
      // this.todos = JSON.parse(getStringValue(e)).forEach((element, index) => {
      //   if (element.completed == true) {
      //     this.todos.push(element);
      //   }
      // });
      console.log(JSON.parse(e|| "[]"));
    });
    // this.todos = this.todoService.getTodos();
    // this.todos.forEach(element => {

    //   if(element.completed == true){
    //     console.log("oui" + element)
    //   }
    // });
  }
}
