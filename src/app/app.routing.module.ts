import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { LoginComponent } from './login/login.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AuthGuard } from './auth.guard';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employee/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard] },
  { path: 'delete/:id', component: DeleteEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'create', component: CreateEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/employees' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
