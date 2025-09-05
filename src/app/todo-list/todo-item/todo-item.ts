import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
  @Input() todo!: Todo;
  @Input() i: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  onCheckboxClick(todo: Todo | undefined) {
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }

    onDelete(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Delete has been triggerd")
  }
}
