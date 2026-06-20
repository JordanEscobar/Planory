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
    this.loadTasks();
    return this.tasks.filter(t => t.status === 'pendiente').length;
  }

  getCompletedCount(): number {
    this.loadTasks();
    return this.tasks.filter(t => t.status === 'completada').length;
  }

  loadTasks(): void{
    const data = localStorage.getItem('tareas');
    if(data){
      this.tasks = JSON.parse(data) as Task[];
    }
  }

    saveTasks(): void{
    localStorage.setItem('tareas', JSON.stringify(this.tasks));
  }

    getTasks(): Task[] {
    this.loadTasks();
    return this.tasks.reverse();
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.saveTasks();
  }
  
}
