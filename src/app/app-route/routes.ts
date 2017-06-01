import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from '../inputoutput/parent.component';
import { PipesComponent } from  '../pipes/pipes.component';
import { TemplateDrivenFormComponent } from '../forms/template-driven/tdf/template-driven-form.component';
import { TdfValIComponent } from '../forms/template-driven/tdf-val-i/tdf-val-i.component';
import { TdfValIIComponent } from '../forms/template-driven/tdf-val-ii/tdf-val-ii.component';
import { ModelDrivenFormComponent } from "../forms/model-driven-form/mdf/model-driven-form.component";


export const ROUTES: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'inputoutput', component: ParentComponent },
	{ path: 'pipes', component: PipesComponent },
	{ path: 'template-driven-form',component: TemplateDrivenFormComponent },
	{ path: 'tdf-val-i',component: TdfValIComponent },
	{ path: 'tdf-val-ii',component: TdfValIIComponent },
	{ path: 'model-driven-form',component: ModelDrivenFormComponent }
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