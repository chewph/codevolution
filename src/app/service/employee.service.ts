import { Injectable } from "@angular/core";

//@Injectable()
/*Injectable is to tell Angular that there is some dependancy on external components, which this class
* doesn't have. So the @Injectable is not required here.
* */
export class EmployeeService{
	getEmployees(){
		return [
			{"id": 1, "name": "Andrew", "gender": "Male"},
			{"id": 2, "name": "Brandon", "gender": "Male"},
			{"id": 3, "name": "Christina", "gender": "Female"},
			{"id": 4, "name": "Desmond", "gender": "Male"},
		]
	}
}