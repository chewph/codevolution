import { Component } from '@angular/core';

@Component({
	selector: 'template-driven-form',
	templateUrl: './template-driven-form.component.html',
})


export class TemplateDrivenFormComponent{

	private myName: string = 'ChewyDonut';
	private email: string = 'default@abc.com';

	public onSubmit(value: any){
		console.log(value);
	}

}
