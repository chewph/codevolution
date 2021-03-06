import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '../inputoutput/parent.component';
import { PipesComponent } from  '../pipes/pipes.component';
import { TemplateDrivenFormComponent } from '../forms/template-driven/tdf/template-driven-form.component';
import { TdfValIComponent } from '../forms/template-driven/tdf-val-i/tdf-val-i.component';
import { TdfValIIComponent } from '../forms/template-driven/tdf-val-ii/tdf-val-ii.component';
import { ModelDrivenFormComponent } from "../forms/model-driven-form/model-driven-form.component";
import { EmployeeMainComponent } from "../service/employee-main.component";
import { EmployeeMainHttpComponent } from "../http/employee-main-http.component";
import { DepartmentListComponent } from "../routing/department-list.component";
import { EmployeeListRouteComponent } from "../routing/employee-list-route.component";
import { DepartmentDetailComponent } from "../routing/department-detail.component";
import { Component1 } from "../routing/multi-route/component1";
import { Component2 } from "../routing/multi-route/component2";
import { MainComponent } from "../routing/multi-route/main.component";
import { ContentComponent } from "../routing/multi-route/content/content.component";
import { TopMenuComponent } from "../routing/multi-route/top-menu/top-menu.component";


export const ROUTES: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'inputoutput', component: ParentComponent },
	{ path: 'pipes', component: PipesComponent },
	{ path: 'template-driven-form', component: TemplateDrivenFormComponent },
	{ path: 'tdf-val-i', component: TdfValIComponent },
	{ path: 'tdf-val-ii', component: TdfValIIComponent },
	{ path: 'model-driven-form', component: ModelDrivenFormComponent },
	{ path: 'service', component: EmployeeMainComponent },
	{ path: 'http', component: EmployeeMainHttpComponent },
	{ path: 'employees', component: EmployeeListRouteComponent },
	{ path: 'departments', component: DepartmentListComponent },
	{ path: 'departments/:id', component: DepartmentDetailComponent },
	{ path: 'component1-path', component: Component1, outlet: 'component1-outlet-name' },
	{ path: 'component2-path', component: Component2, outlet: 'component2-outlet-name' },
	{ path: 'mainPage', component: MainComponent,
			children: [
				{ path: 'topMenuPath', component: TopMenuComponent, outlet: 'topMenu-outlet' },
				{ path: 'contentPath', component: ContentComponent, outlet: 'content-outlet' }
			]
	}
	/*{ path: '**', component: DepartmentDetailComponent },*/



]
/*{ path: 'Dashboard', component: DashboardComponent },
 {
 path: 'ExamplesMenu', component: ExamplesMenuComponent,
 children: [
 { path: '', redirectTo: '', pathMatch: 'full' },
 { path: 'HerosList', component: HeroesComponent },
 { path: 'ShowHide', component: ShowHideComponent },
 { path: 'GetComponentProperty', component: GetComponentPropertyComponent },
 { path: 'DoForLoop', component: ForloopEgComponent },
 { path: 'DoDataBind', component: BindPropertyComponent },
 { path: 'ClickMe', component: ClickMeComponent },
 { path: 'KeyupAnyEvent', component: KeyupComponent },
 { path: 'LoopBack', component: LoopbackComponent },
 { path: 'LittleTour', component: LittleTourComponent },
 { path: 'Master-Detail', component: MasterComponent },
 { path: 'HeroForm', component: HeroFormComponent },
 { path: 'ScrollTo', component: ScrollToComponent },
 { path: 'Input-Output', component: ParentComponent },
 {
 path: 'ChildRoute', component: ChildRouteComponent,
 children: [
 { path: '', redirectTo: '', pathMatch: 'full' },
 { path: 'Childone', component: ChildoneComponent },
 { path: 'Childtwo', component: ChildtwoComponent },
 ]
 }
 ]
 }
 ]*/