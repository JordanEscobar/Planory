import { Task } from './../../core/models/task.model';
import { Component } from '@angular/core';
import { IonHeader, IonLabel, IonIcon, IonToolbar, IonList, IonItem, IonTitle, IonContent, IonButton, IonBadge, IonSearchbar } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {addIcons} from 'ionicons';
import { checkmark } from 'ionicons/icons';
import { TaskService } from '../../core/services/taskService';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonSearchbar, IonBadge, IonHeader, IonList, IonItem, IonToolbar, IonButton, IonTitle, CommonModule, FormsModule, IonContent, IonLabel, IonIcon],
})
export class HomePage {
  searchText = '';

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
    this.actualizarContadores(); 
  }

  actualizarContadores() {
  this.tareasTcount = this.tareas.length;
  this.tareasPCount = this.tareas.filter(t => t.status === 'pendiente').length;
  this.tareasCcount = this.tareas.filter(t => t.status === 'completada').length;
}


get tareasFiltradas(): Task[] {
  let tareas = this.tareas;

  // búsqueda
  if (this.searchText.trim()) {
    const search = this.normalizeText(this.searchText);

    tareas = tareas.filter(t =>
      this.normalizeText(t.title).includes(search)
    );
  }

  // filtro estado
  if (this.filtro === 'pendientes') {
    tareas = tareas.filter(t => t.status === 'pendiente');
  }

  if (this.filtro === 'completadas') {
    tareas = tareas.filter(t => t.status === 'completada');
  }

  return tareas;
}

  marcarListo(tarea: Task){
    tarea.status = 'completada';
    this.tareas = [...this.tareas];
      this.actualizarContadores();
    localStorage.setItem('tareas',JSON.stringify(this.tareas));
  }

  private normalizeText(text: string): string {
    return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

}








