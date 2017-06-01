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
import { ModelDrivenFormComponent } from './forms/model-driven-form/mdf/model-driven-form.component';
import { ReactiveFormsModule } from '@angular/forms';

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
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule{
}
