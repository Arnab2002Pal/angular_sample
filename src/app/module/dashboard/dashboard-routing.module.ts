import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddUserModule } from '../add-user/add-user.module';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "add", loadChildren: ()=> import('../add-user/add-user.module').then(m => m.AddUserModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
