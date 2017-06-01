import { Component } from '@angular/core';

@Component({
	selector: 'app-pipes',
	template: `
			<h2>{{ name }}</h2>
			<h2>{{ name | uppercase }}</h2>
			<h2>{{ name | slice: '2' : '4' }}</h2>
			<!--<h2>{{ name | replace: 'The' : 'Hello' }}</h2>-->
			<h2> {{ 56.789 }}</h2>
			<h2> {{ 56.789 | number: '1.2-3'}}</h2> <!--min of 1.min of 2-max of 3--->
			<h2> {{ 56.789 | number: '3.8-10'}}</h2><!--min of 3.min of 8-max of 10--->
			<h2> {{ 56.789 | number: '3.2-2'}}</h2><!--min of 3.min of 2-max of 2 (rounded off) -->


			<h2> {{ 8.99 | currency: 'EUR':true}}</h2><!-- true displays the dollar sign-->
			<h2> {{ 8.99 | currency: 'GBP':true}}</h2>
			<h2> {{ date | date:'fullDate' }}</h2>
			<h2> {{ date | date:'shortDate' :'shortTime' }} {{ date | date:'shortTime' }} </h2>
	`,
	styles: []
})
export class PipesComponent{
	private name: string = 'The Joatmon';
	private date = new Date();

}
