import { RouterModule, Routes } from '@angular/router';

export const ROUTES: Routes = [
	{ path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
	{ path: 'InputOutput', component: HeroesComponent },
	{ path: 'detail/:id',component: HeroDetailComponent }
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