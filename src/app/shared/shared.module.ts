import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { I18nModule } from './i18n/i18n.module';
import { MaterialModule } from './modules/MaterialModule';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
	declarations: [
		LoaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
		I18nModule
	],
	exports: [
		LoaderComponent,
		MaterialModule,
		ReactiveFormsModule,
		I18nModule
	]
})
export class SharedModule { }
