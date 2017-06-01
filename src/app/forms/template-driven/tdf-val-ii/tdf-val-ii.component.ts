import { Component } from '@angular/core';

@Component({
	selector: 'app-tdf-val-ii',
	templateUrl: './tdf-val-ii.component.html',
	styles: [ `input.ng-invalid {border-left: 5px solid red}
			input.ng-valid {border-left: 5px solid green}
			` ]
})
export class TdfValIIComponent{
	private myName: string = 'ChewyDonut';
	private email: string = 'default@abc.com';

	public onSubmit(value: any){
		console.log(value);
	}

	public onChange(value: any){
		console.log('Max length' + value);
	}
}
