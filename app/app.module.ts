import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeeService } from './employees/employee.service';
import { AgGridModule} from 'ag-grid-angular';
import {ListcustomersComponent} from './employees/listcustomers.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import {YoutubePlayerModule} from 'ngx-youtube-player';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-gaurd.service';
import { PageNotFoundComponent } from './employees/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import {EmployeeFilterPipe} from './employees/employee-filter.pipe';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import {EmployeeDetailsGuardService} from './employees/employee-details-guard.service';



// const appRoutes: Routes = [
//   { path: 'list', component: ListEmployeesComponent },
//   { path: 'create', component: CreateEmployeeComponent ,  canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
//   { path: 'customers', component: ListcustomersComponent },
//   { path: '', redirectTo: '/list', pathMatch: 'full' }
// ];


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    ListcustomersComponent,
    DisplayEmployeeComponent,
    PageNotFoundComponent,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(appRoutes),
    FormsModule,
    BsDatepickerModule.forRoot(),
    AgGridModule.withComponents([AppComponent]),
    YoutubePlayerModule,
    AppRoutingModule
  ],
  providers: [EmployeeService,
    CreateEmployeeCanDeactivateGuardService,
    EmployeeListResolverService,
    EmployeeDetailsGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  
 }
