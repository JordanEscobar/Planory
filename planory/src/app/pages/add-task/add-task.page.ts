import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonButton, IonHeader,IonAlert, IonTitle, IonToolbar, IonItem, IonInput, IonBadge } from '@ionic/angular/standalone';
import {Task} from '../../core/models/task.model';
import { TaskService } from 'src/app/core/services/taskService';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
  standalone: true,
  imports: [IonBadge, IonInput,IonAlert, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AddTaskPage implements OnInit {

    public alertButtons: any[] = [];

    title = '';
    description = '';
    tareas: Task[] = [];
    tareasPCount: number =0;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tareasPCount = this.taskService.getPendingCount();

    this.alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: 'Aceptar',
      handler: () => {
        this.addTask();
      }
    }
  ];



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
      //alert('Tarea agregada exitosamente');
    
      
      
    }

}
