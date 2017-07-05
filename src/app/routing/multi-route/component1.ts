import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'component2',
	template: `
		<div style="color: green; margin-top: 1rem;">Component 1 router outlet</div>
		<div id="auxdiv" style="border: 2px solid blue; padding: 1rem; width:150px; text-align: center">
			Component 1!
		</div>
	`,
	styles: []
})
export class Component1 implements OnInit{

	constructor(){
	}

	ngOnInit(){
	}

}
