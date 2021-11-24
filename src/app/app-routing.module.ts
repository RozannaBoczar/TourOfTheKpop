import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdolsComponent } from './idols/idols.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdolDetailsComponent } from './idol-details/idol-details.component';

const routes: Routes = [
  { path: 'idols', component: IdolsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: IdolDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }