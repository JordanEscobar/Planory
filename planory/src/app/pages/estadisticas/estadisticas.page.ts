import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonBadge, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TaskService } from 'src/app/core/services/taskService';
import {Chart} from 'chart.js/auto';


@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
  standalone: true,
  imports: [IonContent,IonBadge, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EstadisticasPage implements OnInit {
  tareasPCount: number =0;
  chart: any;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tareasPCount = this.taskService.getPendingCount();
    this.crearGrafico();
  }

crearGrafico() {
  if (this.chart) {
    this.chart.destroy();
  }

  this.chart = new Chart('pieChart', {
    type: 'pie',
    data: {
      labels: ['Pendientes', 'Completadas'],
      datasets: [{
        data: [5, 10]
      }]
    }
  });
}



}
