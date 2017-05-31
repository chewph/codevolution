import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes';

/*
 * The Routing Module pulls the routes into a variable.
 * The variable clarifies the routing module pattern in case you export the module in the future.
 The Routing Module adds RouterModule.forRoot(routes) to imports.
 The Routing Module adds RouterModule to exports so that the components in the companion module have
 access to Router declarables, such as RouterLink and RouterOutlet.
 * */
@NgModule({
	imports: [ RouterModule.forRoot(ROUTES) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
