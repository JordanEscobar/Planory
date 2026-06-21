import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonBadge, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TaskService } from 'src/app/core/services/taskService';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  standalone: true,
  imports: [IonContent,IonBadge, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstadisticasPage implements OnInit {
  tareasPCount: number =0;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tareasPCount = this.taskService.getPendingCount();
  }

}
