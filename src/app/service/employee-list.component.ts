import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "./employee.service";

@Component({
	selector: 'employee-list',
	template: `
			<h3>Employee List</h3>
			<ul *ngFor="let employee of employees">
				<li>{{ employee.name }}</li>				
			</ul>
	
			`,
	styles: []
})

export class EmployeeListComponent implements OnInit{
	employees = [];

	constructor(private _employeeService: EmployeeService){ // injection takes place here
	}

	ngOnInit(){
		this.employees = this._employeeService.getEmployees();
	}

}
