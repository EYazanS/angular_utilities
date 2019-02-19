import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import { MaterialModule } from './../../shared/modules/MaterialModule';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
