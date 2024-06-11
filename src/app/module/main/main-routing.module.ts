import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { authGuard } from '../../services/auth.guard';

const routes: Routes = [
  {path: "", component: MainComponent},
  {path: "login", loadChildren: ()=> import('../login/login.module').then(m => m.LoginModule)},
  {path: "dashboard", loadChildren: ()=> import('../dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[authGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule { }

