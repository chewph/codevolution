import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
	selector: 'employee-main',
	template: `
			<h1>Some Company</h1>
			<employee-list></employee-list>
			`,
	styles: [],
	providers: [EmployeeService] // Any child classes below will be able to access
})
export class EmployeeMainComponent implements OnInit{

	constructor(){
	}

	ngOnInit(){
	}

}
