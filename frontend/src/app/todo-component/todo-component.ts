// src/app/todo/todo.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo-service';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-component.html',
  styleUrls: ['./todo-component.css']
})
export class TodoComponent {
  todos: any[] = [];
  newTodo: string = '';

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  async loadTodos() {
    this.todos = await this.todoService.getTodos();
  }

  async addTodo() {
    if (this.newTodo.trim()) {
      await this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
      await this.loadTodos();
    }
  }

  async toggleTodo(todo: any) {
    await this.todoService.updateTodo(todo._id, !todo.completed);
    await this.loadTodos();
  }

  async deleteTodo(todo: any) {
    await this.todoService.deleteTodo(todo._id);
    await this.loadTodos();
  }
}
