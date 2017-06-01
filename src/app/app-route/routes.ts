import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '../inputoutput/parent.component';
import { PipesComponent } from  '../pipes/pipes.component';
import { TemplateDrivenFormComponent } from '../forms/template-driven/template-driven-form/template-driven-form.component';


export const ROUTES: Routes = [
	{ path: '', redirectTo: '', pathMatch: 'full' },
	{ path: 'inputoutput', component: ParentComponent },
	{ path: 'pipes', component: PipesComponent },
	{ path: 'template-driven-forms',component: TemplateDrivenFormComponent }
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