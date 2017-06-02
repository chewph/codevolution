import { Component, OnInit } from '@angular/core';
import { EmployeeHttpService } from './employee-http.service';

@Component({
	selector: 'employee-http-main',
	template: `
			<h1>Some Company</h1>
			<employee-http-list></employee-http-list>
			`,
	styles: [],
	providers: [EmployeeHttpService] // Any child classes below will be able to access
})
export class EmployeeMainHttpComponent implements OnInit{

	constructor(){
	}

	ngOnInit(){
	}

}
