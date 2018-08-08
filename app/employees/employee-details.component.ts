import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeToDisplay: Employee;
  constructor(private _employeeService: EmployeeService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this.employeeToDisplay = this._employeeService.getEmployee(id);

  }
}
