import { Task } from './../../core/models/task.model';
import { Component } from '@angular/core';
import { IonHeader, IonLabel, IonIcon, IonToolbar, IonList, IonItem, IonTitle, IonContent, IonButton, IonBadge } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {addIcons} from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { TaskService } from '../../core/services/taskService';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonBadge, IonHeader, IonList, IonItem, IonToolbar, IonButton, IonTitle, CommonModule, FormsModule, IonContent, IonLabel, IonIcon],
})
export class HomePage {

  titulo = '';
  descripcion = '';
  tareas: Task[] = [];
  filtro:string = 'todas';

  tareasPCount:number = 0;
  tareasCcount:number = 0;
  tareasTcount: number = 0;

  constructor(private taskService: TaskService){
    addIcons({checkmark});

  }
  
  ionViewWillEnter(){
    this.tareas = this.taskService.getTasks();
    this.tareasTcount = this.tareas.length;
    this.tareasPCount = this.tareas.filter(t => t.status === 'pendiente').length;
    this.tareasCcount = this.tareas.filter(t => t.status === 'completada').length;
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

  marcarListo(tarea: Task){
    tarea.status = 'completada';
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

}








