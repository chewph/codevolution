import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService{
	getEmployees(){
		return [
			{"id": 1, "name": "Andrew", "gender": "Male"},
			{"id": 2, "name": "Brandon", "gender": "Male"},
			{"id": 3, "name": "Christina", "gender": "Female"},
			{"id": 4, "name": "Desmond", "gender": "Male"},
			{"id": 5, "name": "Elvin", "gender": "Male"},
			{"id": 6, "name": "Felicia", "gender": "Female"},
		]
	}
}