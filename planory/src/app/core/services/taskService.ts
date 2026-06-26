import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { search } from 'ionicons/icons';

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

  getTasksByDate(date: Date): Task[] {
    return this.getTasks().filter(x => x.date.toDateString() === date.toDateString());
  }

  getTasksByStatus(status: String): Task[] {
    return this.getTasks().filter(t => t.status === status);
  }

  getTasksByTitle(title: String): Task[]{
    const normalizedTitle = this.normalizeText(search);
    return this.getTasks().filter(t => this.normalizeText(t.title).includes(normalizedTitle));
  }

  getTasksByDescription(description: string): Task[]{
    const normalizedDescription = this.normalizeText(description);
    return this.getTasks().filter(t => this.normalizeText(t.description).includes(normalizedDescription));
  }

  private normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
  
}
