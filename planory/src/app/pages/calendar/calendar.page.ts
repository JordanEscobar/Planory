import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,IonBadge, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { TaskService } from 'src/app/core/services/taskService';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
  standalone: true,
  imports: [IonContent,IonBadge, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CalendarPage implements OnInit {
  tareasPCount:number =0;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tareasPCount = this.taskService.getPendingCount();
  }

}
