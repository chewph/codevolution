import { Component } from '@angular/core';

@Component({
	selector: 'app-tdf-val-i',
	templateUrl: './tdf-val-i.component.html',
	styles: [`input.ng-invalid{border-left:5px solid red}
			input.ng-valid{border-left:5px solid green}
			`]
})
export class TdfValIComponent{

	private myName: string = 'ChewyDonut';
	private email: string = 'default@abc.com';

	public onSubmit(value: any){
		console.log(value);
	}

}
