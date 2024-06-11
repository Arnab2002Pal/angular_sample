import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './module/main/main.component';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  {path: "", loadChildren: ()=> import('./module/main/main.module').then(m => m.MainModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
