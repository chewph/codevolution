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

@NgModule({
	declarations: [
		AppComponent,
		TemplateDrivenFormComponent,
		ParentComponent,
		ChildComponent,
		PipesComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
