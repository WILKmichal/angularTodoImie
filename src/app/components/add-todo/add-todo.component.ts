import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import {Todo} from '../../models/Todo'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  nom:string;
  prenom:string;
  email:string;

  constructor(private todoservice:TodoService) { }

  ngOnInit() {
  }

  onSubmit() {
    const todo:Todo = {
      id: Date.now(),
      nom: this.nom,
      prenom : this.prenom,
      email : this.email,
      completed: false
    }

    this.todoservice.addTodo(todo);
    this.addTodo.emit(todo);
  }

}
