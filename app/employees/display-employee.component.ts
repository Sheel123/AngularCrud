import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  @Input() isVisible = true;
  employeeToDisplay: Employee;
  private _id: number;
  private selectedEmployeeID : number;
  constructor(private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _employeeService: EmployeeService,
    private changeRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this._id = +this._activatedRoute.snapshot.paramMap.get('id');
    this.selectedEmployeeID = this._id;
    this.employeeToDisplay = this._employeeService.getEmployee(this._id);
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }

  backToList(): void {
    this._router.navigate(['/list']);
  }

  getNextEmployee(): void {
    console.log(this._id);
    if(this._id <= 2 ){
    
    this._id = this._id + 1;
    console.log(this._id);
    this.employee = this._employeeService.getEmployee(this._id);
    this._router.navigate(['/employees', this._id]);
    this.changeRef.detectChanges();
    }
    else{
    this._id = 1;
    this.employee = this._employeeService.getEmployee(this._id);
    this._router.navigate(['/employees', this._id]);
    this.changeRef.detectChanges();
    }
  }
}
