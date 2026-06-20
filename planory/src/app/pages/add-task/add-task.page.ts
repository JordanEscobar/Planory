import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButton, IonHeader, IonTitle, IonToolbar, IonItem, IonInput } from '@ionic/angular/standalone';
import {Task} from '../../core/models/task.model';
import { TaskService } from 'src/app/core/services/taskService';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [IonInput, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddTaskPage implements OnInit {

    title = '';
    description = '';
    tareas: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
     }

    addTask(){
      if(!this.title || !this.description)return;


      const newTask: Task = {
        id: Date.now(),
        title: this.title,
        description: this.description,
        date: new Date(),
        status: 'pendiente'
      };
      this.taskService.addTask(newTask);
      this.title = '';
      this.description = '';
      alert('Tarea agregada exitosamente');
    }

}
