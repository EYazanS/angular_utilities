import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from './pages/forms/forms.module';
import { FormsComponent } from './pages/forms/forms.component';
import { MainLayoutModule } from './pages/main-layout/main-layout.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent,
		children: [
			{ path: 'forms', component: FormsComponent }
		]
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { useHash: true }),
		MainLayoutModule,
		FormsModule
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
