import { Component, OnInit } from '@angular/core';
import { IonTabs,IonIcon,IonTabBar,IonTabButton } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { home,search, calendar, addCircleOutline, podium } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  standalone: true,
  imports: [IonTabs,IonIcon,IonTabBar,IonTabButton]
})
export class TabsComponent  implements OnInit {

  constructor() { 
    addIcons({home,addCircleOutline,calendar,podium,search});
  }

  ngOnInit() {}

}
