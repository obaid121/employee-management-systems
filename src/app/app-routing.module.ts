import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full'},
  { path: 'employee', component: EmployeeTableComponent },
  { path: 'employee/edit/:id', component: EmployeeTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
