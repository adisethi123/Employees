import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    ToolbarComponent,
    EmployeeDetailComponent,
    LoginComponent,
    DeleteEmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
