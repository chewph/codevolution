import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'department-detail',
	template: `
    			<h3>Department ID selected: {{ departmentId }} {{ departmentName }}</h3>
			<a (click)="goPrevious()">Previous</a>
			<a (click)="goNext()">Next</a>
			<p>
				<button (click)="gotoDepartments()">Back</button>
			</p>
			`,
	styles: []
})
export class DepartmentDetailComponent implements OnInit{

	public departmentId;
	public departmentName;

	constructor(private route: ActivatedRoute, private router: Router){
	}

	ngOnInit(){
		/*let id = this.route.snapshot.params['id'];
		this.departmentId = id;*/

		this.route.params.subscribe((params: Params) => {
			let id = parseInt(params['id']);
			this.departmentId = id;
		})
	}

	goPrevious(){
		let previousId = this.departmentId - 1;
		console.log("Previous id: " + previousId);
		//this.router.navigate(['/departments', previousId]);
		this.router.navigate([previousId], {relativeTo: this.route});
	}

	goNext(){
		let nextId = this.departmentId + 1;
		console.log("Next id: " + nextId);
		//this.router.navigate(['/departments', nextId]);
		this.router.navigate([nextId], {relativeTo: this.route});
	}

	// Optional parameter
	gotoDepartments(){
		console.log("Selected Id: " + this.departmentId);
		let selectedId = this.departmentId? this.departmentId: null;
		//this.router.navigate(['/departments', { id: selectedId, random: "random" }]); // name(id)=value(selectedId) pair
		this.router.navigate(['../', { id: selectedId, random: "random" }], {relativeTo: this.route}); // name(id)=value(selectedId) pair
	}

}
