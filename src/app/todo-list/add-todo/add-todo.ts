import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo implements OnInit {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    this.title='';
    this.desc='';
  }

}