import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeHttpService{

	private _url: string = "assets/apidata/employeedata1.json";

	constructor(private _http: Http){

	}
	getEmployees(){
		return this._http.get(this._url)
			.map((response:Response) => response.json())
			.catch(this._errorHandler);
			//		x					y
			/* x ==> Response object variable input received from http get
			   y ==> convert response to JSON
			* */
	}
	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}