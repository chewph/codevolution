import { Component, EventEmitter } from '@angular/core';

@Component({
	selector: 'child-app',
	//templateUrl: './child.component.html',
	template: `
		<h2>Child App Component</h2>
		<label>Enter Child App Value</label>
		<input type="text" #childText (keyup)="onChange(childText.value)"> 
		<br>
		Value from Parent App is: {{ parentData }}
		`,
	inputs: [`parentData`],
	outputs: [`childEvent`]
})

export class ChildComponent{
	public parentData: string;
	childEvent = new EventEmitter<string>();

	public onChange(value: string){
		this.childEvent.emit(value);
	}

}