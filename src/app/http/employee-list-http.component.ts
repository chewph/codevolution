import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from "./employee-http.service";

@Component({
	selector: 'employee-http-list',
	template: `
			<h3>Employee Http List</h3>
			<h3>{{ errorMsg }}</h3>
			<ul *ngFor="let employee of employees">
				<li>{{ employee.name }}</li>				
			</ul>,
			`,
	styles: []
})

export class EmployeeListHttpComponent implements OnInit{
	employees = [];
	errorMsg: string;

	constructor(private _employeeHttpService: EmployeeHttpService){
	}

	ngOnInit(){
		this._employeeHttpService.getEmployees()
			.subscribe(resEmployeeData => this.employees = resEmployeeData,
				// 				x			y				z
				/* x ==> Typeless input parameter
				 *  y ==> employees array
				 *  z ==> Assign x to employees array
				 *  */
					 resEmployeeError => this.errorMsg = resEmployeeError);
					// second parameter call back function if error occurs

	}

}
