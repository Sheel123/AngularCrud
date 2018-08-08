import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  @ViewChild('employeeForm') public createEmployeeForm: NgForm;
  gender = 'male';
  isActive = true;
  previewPhoto = false;
  departments: Department[] = [
    {id:1, name:'HelpDesk'},
    {id:2, name:'HR'},
    {id:3, name:'IT'},
    {id:4, name:'PayRoll'}
  ];

  employee: Employee = {
    id:null,
    name:null,
    gender:null,
    email:null,
    phoneNumber:null,
    contactPreference:null,
    dateOfBirth:null,
    department:'select',
    isActive:null,
    photoPath:null,
    password: null,
    confirmPassword:null
  }

 datepickerConfig: Partial<BsDatepickerConfig>;
 constructor(private _employeeService: EmployeeService,
  private _router: Router) {
    this.datepickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue'});
   }


 
  

  ngOnInit() {
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  saveEmployee(): void {
    const newEmployee : Employee = Object.assign({},this.employee)
    this._employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    this._router.navigate(['list']);
    console.log(this.employee);
  }

}
