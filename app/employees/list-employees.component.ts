import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
// import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  employeeToDisplay: Employee;
  searchTerm: string;
 private arrayIndex: number = 1;

 player: YT.Player;
 private id: string = 'Y3WGGb00GHA';

  // constructor(private _employeeService: EmployeeService,
  constructor(
  private _route: Router,
private _activatedRoute: ActivatedRoute) { 
  this.employees = this._activatedRoute.snapshot.data['employeeList'];

    if (this._activatedRoute.snapshot.queryParamMap.has('searchTerm')) {
      this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
    } else {
      this.employees = this.employees;
    }
}

  ngOnInit() {
    // this.employees = this._employeeService.getEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  onNextclick(): void {
if(this.arrayIndex <=2 ){
this.employeeToDisplay = this.employees[this.arrayIndex];
this.arrayIndex++;
  }
  else{
    this.employeeToDisplay = this.employees[0];
    this.arrayIndex = 1;
  }
}

savePlayer (player){
  this.player = player;
  console.log('player instance', player);
}

onStateChange(event){
  console.log('player state',event.data);
}
  

onClick(employeeID: number){
  this._route.navigate(['/employees', employeeID]);
}

}
