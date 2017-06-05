import { Component } from '@angular/core';

@Component({
	selector: 'department-list',
	template: `
		<h3>Department List</h3>
		<ul class="items">
			<li *ngFor="let department of departments">
				<span class="badge">{{ department.id }}</span> {{ department.name }}
			</li>
		</ul>`,
	styles: []
})
export class DepartmentListComponent{
	departments = [
		{ "id": 1, "name": "Angular" },
		{ "id": 2, "name": "Node" },
		{ "id": 3, "name": "MongoDB" },
		{ "id": 4, "name": "Ruby" },
		{ "id": 5, "name": "Bootstrap" },
	]

}