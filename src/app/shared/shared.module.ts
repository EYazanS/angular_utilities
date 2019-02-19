import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './modules/MaterialModule';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
	declarations: [
		LoaderComponent
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		LoaderComponent,
		MaterialModule
	]
})
export class SharedModule { }
