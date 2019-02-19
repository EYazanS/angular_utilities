import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout.component';
import { MaterialModule } from './../../shared/modules/MaterialModule';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [
		CommonModule,
		MaterialModule,
		RouterModule
	],
	exports: [MainLayoutComponent]
})
export class MainLayoutModule { }
