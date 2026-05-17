import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private tasks: Task[] = [];

  constructor(){
    this.loadTasks();
  }

  getPendingCount(): number {
    return this.tasks.filter(t => t.status === 'pendiente').length;
  }

  loadTasks(): void{
    const data = localStorage.getItem('tareas');
    if(data){
      this.tasks = JSON.parse(data) as Task[];
    }
  }
  
}
