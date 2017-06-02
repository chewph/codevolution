import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeHttpService{

	private _url: string = "assets/apidata/employeedata.json";

	constructor(private _http: Http){

	}
	getEmployees(){
		return this._http.get(this._url)
			.map((response:Response) => response.json());
			//		x					y
			/* x ==> Response object variable input received from http get
			   y ==> convert response to JSON
			* */
	}
}