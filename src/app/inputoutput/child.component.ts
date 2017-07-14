import { Component, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'child-app',
	//templateUrl: './child.component.html',
	template: `
		<h2>Child App Component</h2>
		<label>Enter Child App Value</label>
		<input type="text" #childText (keyup)="onChange(childText.value)"> 
		<br>
		<!--Value from Parent App is: {{ parentData }}-->
		Value from Parent App is: {{ data }}
		`,
	/*inputs: [`parentData`],*/
	outputs: [`childEvent`]
})

export class ChildComponent{
	@Input('parentData') data: string; // parentData input from parent
	public parentData: string;
	childEvent = new EventEmitter<string>();

	public onChange(value: string){
		this.childEvent.emit(value);
	}

}