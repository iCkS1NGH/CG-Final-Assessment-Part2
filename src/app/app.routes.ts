import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login';
import {DashboardComponent} from './components/dashboard/dashboard';
import {EventRegistrationComponent} from './components/event-registration/event-registration';

export const routes: Routes =[
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'event-registration', component: EventRegistrationComponent},
  {path: '**', redirectTo: 'login'}
];
