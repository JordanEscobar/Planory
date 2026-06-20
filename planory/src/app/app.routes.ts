import { Routes } from '@angular/router';
import { TabsComponent } from './pages/tabs/tabs.component';

export const routes: Routes = [
  {
    path:'tabs',
    component:TabsComponent,
    children:[
      {
        path:'home',
        loadComponent:()=>import('./pages/home/home.page').then(m=>m.HomePage),
      },
      {
        path:'add-task',
        loadComponent:()=>import('./pages/add-task/add-task.page').then(m=>m.AddTaskPage),
      },
      {
        path:'calendar',
        loadComponent:()=>import('./pages/calendar/calendar.page').then(m=>m.CalendarPage),
      },
      {
        path:'estadisticas',
        loadComponent:()=>import('./pages/estadisticas/estadisticas.page').then(m=>m.EstadisticasPage),
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
    ],
  },
  {
    path:'',
    redirectTo:'tabs',
    pathMatch:'full'
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./pages/estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
  },
  {
    path: 'calendar',
    loadComponent: () => import('./pages/calendar/calendar.page').then( m => m.CalendarPage)
  },
];
