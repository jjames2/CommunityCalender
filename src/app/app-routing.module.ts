import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from './calendar/calendar.component';
import {WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
