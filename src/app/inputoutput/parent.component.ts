import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
	selector: 'parent-app',
	//templateUrl: './parent.component.html',
	template: `<h2>Parent App Component</h2>
			<label>Enter Parent App Value</label>
			<input type="text" #parentText (keyup)="0">
			<!--Dummy event to refresh view everytime key is pressed-->
			<br>Value from Child App is: {{ childData }}
			<child-app (childEvent)="childData=$event" [parentData]="parentText.value"></child-app>
			`
})
export class ParentComponent {
	private childData: string;

}
