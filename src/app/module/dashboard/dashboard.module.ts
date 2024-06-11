import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavBarComponent } from '../../component/nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDataComponent } from '../../component/user-data/user-data.component';
import { GlobalSearchComponent } from '../../component/global-search/global-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeFormatDobPipe } from '../../pipe/pipe-format-dob.pipe';
import { AddUserModule } from '../add-user/add-user.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavBarComponent,
    UserDataComponent,
    GlobalSearchComponent,
    PipeFormatDobPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    AgGridModule,
    AgGridAngular,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
