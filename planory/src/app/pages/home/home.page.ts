import { Component } from '@angular/core';
import { IonHeader, IonLabel, IonIcon, IonToolbar, IonList, IonItem, IonTitle, IonContent, IonButton, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { Task } from 'src/app/core/models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {addIcons} from 'ionicons';
import { checkmark } from 'ionicons/icons';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonList, IonItem, IonToolbar, IonButton, IonTitle, CommonModule, FormsModule, IonContent, IonInput, IonLabel, IonIcon, IonTextarea],
})
export class HomePage {

  constructor() {
    addIcons({checkmark});
  }

  titulo = '';
  descripcion = '';
  tareas: Task[] = [];
  filtro:string = 'todas';

  ngOnInit(){
    const data = localStorage.getItem('tareas');
    if(data){
      this.tareas = JSON.parse(data) as Task[];
    }
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
