import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo';
import { LocalStorageService } from '../services/local-storage-service';
import { CommonModule } from '@angular/common';
import { TodoItem } from './todo-item/todo-item';
import { AddTodo } from './add-todo/add-todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, TodoItem, AddTodo],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css'
})
export class TodoList implements OnInit {
  localItem: string | null;
  todos: Todo[]; 
  constructor(private localStorage: LocalStorageService) {
    this.localItem = localStorage.getItem("todos");
    console.log(localStorage.getItem("todos"))
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    console.log(this.localStorage);
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
  }

    toggleTodo(todo:Todo){ 
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos[index].active = !this.todos[index].active;
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
    
    console.log(todo)
  }

    deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
