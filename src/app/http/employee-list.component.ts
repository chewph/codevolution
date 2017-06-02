import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from "./employee-http.service";

@Component({
	selector: 'employee-http-list',
	template: `
			<h3>Employee Http List</h3>
			<ul *ngFor="let employee of employees">
				<li>{{ employee.name }}</li>				
			</ul>
	
			`,
	styles: []
})

export class EmployeeListComponent implements OnInit{
	employees = [];

	constructor(private _employeeHttpService: EmployeeHttpService){
	}

	ngOnInit(){
		this._employeeHttpService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData);
	}

}
