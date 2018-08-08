// Import NgModule decorator to decorate AppRoutingModule class
import { NgModule } from '@angular/core';
// Import RouterModule and Routes type from angular router library
import { RouterModule, Routes } from '@angular/router';


// import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
// import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
// import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { EmployeeService } from './employees/employee.service';
// import { AgGridModule} from 'ag-grid-angular';
import {ListcustomersComponent} from './employees/listcustomers.component';
// import { DisplayEmployeeComponent } from './employees/display-employee.component';
// import {YoutubePlayerModule} from 'ngx-youtube-player';
import {CreateEmployeeCanDeactivateGuardService} from './employees/create-employee-can-deactivate-gaurd.service';
import { PageNotFoundComponent } from './employees/page-not-found.component';
import {EmployeeDetailsComponent} from './employees/employee-details.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import {EmployeeDetailsGuardService} from './employees/employee-details-guard.service';

// Configure the routes. The Routes type and the
// referenced components are imported above
const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent,
  resolve: { employeeList: EmployeeListResolverService } },
  { path: 'employees/:id', component: EmployeeDetailsComponent,
  canActivate: [EmployeeDetailsGuardService] },
  { path: 'create', component: CreateEmployeeComponent ,  canDeactivate: [CreateEmployeeCanDeactivateGuardService] },
  { path: 'customers', component: ListcustomersComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  { path: 'notfound', component: PageNotFoundComponent },
];


// The NgModule decorator is imported above
// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so it is available
// to the module that imports this AppRoutingModule
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule],
})
export class AppRoutingModule { }