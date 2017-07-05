import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'component2',
	template: `		
		<div style="color: green; margin-top: 1rem;">Component 2 router outlet</div>
		<div style="border: 2px solid #039be5; padding: 1rem; width:150px; text-align: center">
			Component 2!
		</div>
	`,
	styles: []
})
export class Component2 implements OnInit{

	constructor(private route: ActivatedRoute, private router: Router){
	}

	ngOnInit(){
	}

}
