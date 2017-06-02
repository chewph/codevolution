import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
	selector: 'model-driven-form',
	templateUrl: './model-driven-form.component.html',
	styles: [ `input.ng-invalid {
		border-left: 5px solid red
	}

	input.ng-valid {
		border-left: 5px solid green
	}
	` ]
})
export class ModelDrivenFormComponent{
	/*userForm = new FormGroup({
		name: new FormControl('Initial', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
		email: new FormControl(),
		address: new FormGroup({
			street: new FormControl(),
			city: new FormControl(),
			postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$'))
			//first num 1-9, next four 0-9
		})
	});*/

	userForm: FormGroup;

	constructor(private _formBuilder: FormBuilder){}

	ngOnInit(){
		this.userForm = this._formBuilder.group({
			name: ['Initial', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
			email: [],
			address: this._formBuilder.group({
				street: [],
				city: [],
				postalcode: [null, [Validators.pattern('^[1-9][0-9]{4}$')]]
			})
		})
	}

	public onSubmit(){
		console.log(this.userForm.value);
	}

}
