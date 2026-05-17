import { Task } from './../../core/models/task.model';
import { Component } from '@angular/core';
import { IonHeader, IonLabel, IonIcon, IonToolbar, IonList, IonItem, IonTitle, IonContent, IonButton, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {addIcons} from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { TaskService } from '../../core/services/taskService';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonList, IonItem, IonToolbar, IonButton, IonTitle, CommonModule, FormsModule, IonContent, IonInput, IonLabel, IonIcon, IonTextarea],
})
export class HomePage {

  titulo = '';
  descripcion = '';
  tareas: Task[] = [];
  filtro:string = 'todas';

  tareasPCount:number = 0;

  constructor(private taskService: TaskService){
    addIcons({checkmark});

  }
  
  ngOnInit(){
    const data = localStorage.getItem('tareas');
    if(data){
      this.tareas = JSON.parse(data) as Task[];
    }
    this.tareasPCount = this.taskService.getPendingCount();
  }


  get tareasFiltradas(): Task[]{
    if(this.filtro === 'pendientes')
    {
      return this.tareas.filter(t => t.status === 'pendiente');
    }
    if(this.filtro === 'completadas')
    {
      return this.tareas.filter(t => t.status === 'completada');
    }
    return this.tareas;
  }

  agregarTarea(){
    if(!this.titulo || !this.descripcion)return;

    const nuevaTask: Task = {
      id: Date.now(),
      title: this.titulo,
      description: this.descripcion,
      date: new Date(),
      status: 'pendiente'
    };
    this.tareas.push(nuevaTask);
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
    this.titulo = '';
    this.descripcion = '';
  }

  marcarListo(tarea: Task){
    tarea.status = 'completada';
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

}








