import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-route/app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './forms/template-driven/tdf/template-driven-form.component';
import { ParentComponent } from './inputoutput/parent.component';
import { ChildComponent } from './inputoutput/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { TdfValIComponent } from './forms/template-driven/tdf-val-i/tdf-val-i.component';
import { TdfValIIComponent } from './forms/template-driven/tdf-val-ii/tdf-val-ii.component';
import { ModelDrivenFormComponent } from './forms/model-driven-form/model-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './service/employee-list.component';
import { EmployeeMainComponent } from './service/employee-main.component';
import { EmployeeMainHttpComponent } from './http/employee-main-http.component';
import { EmployeeListHttpComponent } from './http/employee-list-http.component';
import { DepartmentListComponent } from './routing/department-list.component';
import { EmployeeListRouteComponent } from './routing/employee-list-route.component';
import { DepartmentDetailComponent } from './routing/department-detail.component';
import { Component1 } from './routing/multi-route/component1';
import { Ng2SimplePageScrollModule } from 'ng2-simple-page-scroll/ng2-simple-page-scroll';
import { ScrollToModule } from 'ng2-scroll-to';
import { Component2 } from './routing/multi-route/component2';
import { MainComponent } from './routing/multi-route/main.component';
import { TopMenuComponent } from './routing/multi-route/top-menu/top-menu.component';
import { ContentComponent } from './routing/multi-route/content/content.component';


@NgModule({
	declarations: [
		AppComponent,
		TemplateDrivenFormComponent,
		ParentComponent,
		ChildComponent,
		PipesComponent,
		TdfValIComponent,
		TdfValIIComponent,
		ModelDrivenFormComponent,
		EmployeeListComponent,
		EmployeeMainComponent,
		EmployeeMainHttpComponent,
		EmployeeListHttpComponent,
		DepartmentListComponent,
		EmployeeListRouteComponent,
		DepartmentDetailComponent,
		Component1,
		Component2,
		MainComponent,
		TopMenuComponent,
		ContentComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		ReactiveFormsModule,
		ScrollToModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
