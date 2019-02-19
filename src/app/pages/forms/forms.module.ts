import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsComponent } from './forms.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from './../../shared/modules/MaterialModule';

@NgModule({
	declarations: [FormsComponent],
	imports: [
		CommonModule,
		MaterialModule,
		SharedModule
	]
})
export class FormsModule { }
