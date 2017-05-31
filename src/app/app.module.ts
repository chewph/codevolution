import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-route/app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './forms/template-driven/template-driven-form/template-driven-form.component';
import { InputOutputComponent } from './inputoutput/input-output.component';


@NgModule({
	declarations: [
		AppComponent,
		TemplateDrivenFormComponent,
		InputOutputComponent,
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
