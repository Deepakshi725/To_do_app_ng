import { Component, signal } from '@angular/core';
import { TodoComponent } from './todo-component/todo-component';

@Component({
  selector: 'app-root',
  imports: [TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}

