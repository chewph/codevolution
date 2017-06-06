import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
	selector: 'department-list',
	template: `
		<h3>Department List</h3>
		<ul class="items">
			<li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
				<span class="badge">{{ department.id }}</span> {{ department.name }}
			</li>
		</ul>`,
	styles: []
})
export class DepartmentListComponent implements OnInit{
	public selectedId;

	departments = [
		{ "id": 1, "name": "Angular" },
		{ "id": 2, "name": "Node" },
		{ "id": 3, "name": "MongoDB" },
		{ "id": 4, "name": "Ruby" },
		{ "id": 5, "name": "Bootstrap" },
	]

	constructor(private route: ActivatedRoute, private router: Router){

	}

	ngOnInit(){
		this.route.params.subscribe((params: Params) => {
			let id = parseInt(params['id']);
			this.selectedId = id;
		})
	}


	onSelect(department) {
		//this.router.navigate(['/departments', department.id]); // required parameter which will check routes path
		this.router.navigate([department.id], {relativeTo: this.route}); // required parameter which will check routes path
	}

	isSelected(department) {
		return department.id === this.selectedId;
	}
}
