// src/app/todo.service.ts
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = 'http://localhost:3000/api/todos';

  async getTodos() {
    const res = await axios.get(this.apiUrl);
    return res.data;
  }

  async addTodo(title: string) {
    const res = await axios.post(this.apiUrl, { title });
    return res.data;
  }

  async updateTodo(id: string, completed: boolean) {
    const res = await axios.put(`${this.apiUrl}/${id}`, { completed });
    return res.data;
  }

  async deleteTodo(id: string) {
    const res = await axios.delete(`${this.apiUrl}/${id}`);
    return res.data;
  }
}
