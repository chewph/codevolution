import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit{
	title = 'Codevolution Examples';

	constructor(private route: ActivatedRoute, private router: Router){
	}


	ngOnInit(){
	}

	goContent(){

	}

	goMainPage(){
		this.router.navigateByUrl('/mainPage/(topMenu-outlet:topMenuPath//content-outlet:contentPath)');
		//router.navigateByUrl('/articles/(route1:article1//route2:article2)');
	}
}
